"use client";

import {
  cloneElement,
  isValidElement,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactElement,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { timeSlots, weekdays, type WeekdaySlug } from "@/content/availability";
import { lessonFormats, primaryLessonFormat, type LessonFormatSlug } from "@/content/formats";
import { studentLevels, type StudentLevelSlug } from "@/content/levels";
import { site } from "@/content/site";
import { getDictionary } from "@/i18n";
import {
  leadFormSchema,
  flattenLeadFormErrors,
  type LeadFormFieldErrors,
} from "@/lib/leadSchema";
import { cn } from "@/lib/utils";

const dict = getDictionary();

type FormValues = {
  name: string;
  email: string;
  phone: string;
  level: StudentLevelSlug | "";
  format: LessonFormatSlug;
  days: WeekdaySlug[];
  time: string;
  message: string;
  consent: boolean;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  level: "",
  format: primaryLessonFormat.slug,
  days: [],
  time: "",
  message: "",
  consent: false,
};

type SubmitStatus = "idle" | "submitting" | "success";

const MESSAGE_MAX_LENGTH = 1500;

const fieldClass =
  "block w-full rounded-xl border-0 bg-white px-4 py-2.5 text-sm text-ink-900 ring-1 ring-inset ring-ink-200 " +
  "placeholder:text-ink-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 focus-visible:outline-none " +
  "disabled:cursor-not-allowed disabled:bg-ink-50 disabled:text-ink-400";

const invalidFieldClass = "ring-red-300 focus:ring-red-500";

type BookingFormProps = {
  /** Nadpisuje tekst przycisku submit — np. na stronie kontaktowej. */
  submitLabel?: string;
};

export function BookingForm({ submitLabel }: BookingFormProps) {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormFieldErrors>({});
  const [hasAttempted, setHasAttempted] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [genericError, setGenericError] = useState<string | null>(null);
  const summaryRef = useRef<HTMLDivElement | null>(null);

  const fieldId = (name: string) => `${formId}-${name}`;

  function runValidation(candidate: FormValues) {
    const result = leadFormSchema.safeParse({
      ...candidate,
      phone: candidate.phone.trim(),
      message: candidate.message.trim(),
    });
    const nextErrors = result.success ? {} : flattenLeadFormErrors(result.error);
    setErrors(nextErrors);
    return { valid: result.success, nextErrors };
  }

  function updateValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (hasAttempted) runValidation(next);
  }

  function toggleDay(day: WeekdaySlug) {
    const next = values.days.includes(day)
      ? values.days.filter((d) => d !== day)
      : [...values.days, day];
    updateValue("days", next);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasAttempted(true);
    setGenericError(null);

    const { valid, nextErrors } = runValidation(values);

    if (!valid) {
      const firstField = Object.keys(nextErrors)[0];
      if (firstField) {
        document.getElementById(fieldId(firstField))?.focus();
      } else {
        summaryRef.current?.focus();
      }
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/lesson-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      if (response.status === 422) {
        const body = (await response.json()) as { errors?: LeadFormFieldErrors };
        setErrors(body.errors ?? {});
        setStatus("idle");
        return;
      }

      setStatus("idle");
      setGenericError(dict.form.errors.generic);
    } catch {
      setStatus("idle");
      setGenericError(dict.form.errors.network);
    }
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setHasAttempted(false);
    setGenericError(null);
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-panel bg-white p-6 text-center shadow-soft ring-1 ring-inset ring-ink-200 sm:p-10"
      >
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100">
          <Icon name="check" size={26} strokeWidth={2.2} />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-ink-900">{dict.form.success.title}</h2>
        <p className="mt-3 text-ink-600">{dict.form.success.lead}</p>

        <div className="mt-7 rounded-xl bg-ink-50 p-5 text-left">
          <p className="text-sm font-semibold text-ink-900">{dict.form.success.nextStepsHeading}</p>
          <ol className="mt-3 flex flex-col gap-2">
            {dict.form.success.nextSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm/relaxed text-ink-600">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6 text-sm text-ink-500">
          {dict.form.success.spamNote}{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold text-brand-700 hover:text-brand-800">
            {site.contact.email}
          </a>
          .
        </p>

        <Button type="button" variant="secondary" className="mt-7" onClick={handleReset}>
          {dict.form.success.again}
        </Button>
      </div>
    );
  }

  const errorEntries = Object.entries(errors) as [keyof FormValues, keyof typeof dict.form.errors][];
  const isSubmitting = status === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8">
      {(errorEntries.length > 0 || genericError) && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl bg-red-50 p-4 text-sm ring-1 ring-inset ring-red-200"
        >
          {genericError ? (
            <p className="font-semibold text-red-800">{genericError}</p>
          ) : (
            <>
              <p className="font-semibold text-red-800">{dict.form.errors.summaryTitle}</p>
              <ul className="mt-2 flex flex-col gap-1">
                {errorEntries.map(([field, key]) => (
                  <li key={field}>
                    <a href={`#${fieldId(field)}`} className="text-red-700 underline underline-offset-2 hover:text-red-900">
                      {dict.form.errors[key]}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      <fieldset className="flex flex-col gap-5">
        <legend className="text-base font-semibold text-ink-900">{dict.form.legendContact}</legend>

        <Field
          id={fieldId("name")}
          label={dict.form.labels.name}
          hint={dict.form.hints.name}
          error={errors.name ? dict.form.errors[errors.name] : undefined}
        >
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => updateValue("name", e.target.value)}
            placeholder={dict.form.placeholders.name}
            className={cn(fieldClass, errors.name && invalidFieldClass)}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id={fieldId("email")}
            label={dict.form.labels.email}
            hint={dict.form.hints.email}
            error={errors.email ? dict.form.errors[errors.email] : undefined}
          >
            <input
              id={fieldId("email")}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(e) => updateValue("email", e.target.value)}
              placeholder={dict.form.placeholders.email}
              className={cn(fieldClass, errors.email && invalidFieldClass)}
              aria-invalid={Boolean(errors.email)}
            />
          </Field>

          <Field
            id={fieldId("phone")}
            label={dict.form.labels.phone}
            optional
            hint={dict.form.hints.phone}
            error={errors.phone ? dict.form.errors[errors.phone] : undefined}
          >
            <input
              id={fieldId("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => updateValue("phone", e.target.value)}
              placeholder={dict.form.placeholders.phone}
              className={cn(fieldClass, errors.phone && invalidFieldClass)}
              aria-invalid={Boolean(errors.phone)}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="text-base font-semibold text-ink-900">{dict.form.legendLesson}</legend>

        <Field
          id={fieldId("level")}
          label={dict.form.labels.level}
          hint={dict.form.hints.level}
          error={errors.level ? dict.form.errors[errors.level] : undefined}
        >
          <Select
            id={fieldId("level")}
            name="level"
            required
            value={values.level}
            onChange={(e) => updateValue("level", e.target.value as StudentLevelSlug)}
            invalid={Boolean(errors.level)}
          >
            <option value="" disabled>
              {dict.form.placeholders.level}
            </option>
            {studentLevels.map((level) => (
              <option key={level.slug} value={level.slug}>
                {level.label.pl}
              </option>
            ))}
          </Select>
        </Field>

        <div>
          <span className="mb-2.5 block text-sm font-medium text-ink-700">{dict.form.labels.format}</span>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            {lessonFormats.map((format) => (
              <label
                key={format.slug}
                className={cn(
                  "flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-sm ring-1 ring-inset transition-colors",
                  format.available
                    ? "cursor-pointer ring-ink-200 hover:ring-brand-300 has-[:checked]:bg-brand-50 has-[:checked]:ring-brand-500"
                    : "cursor-not-allowed bg-ink-50 text-ink-400 ring-ink-200",
                )}
              >
                <input
                  type="radio"
                  name="format"
                  value={format.slug}
                  checked={values.format === format.slug}
                  disabled={!format.available}
                  onChange={() => updateValue("format", format.slug)}
                  className="size-4 accent-brand-600"
                />
                <span className="flex flex-col">
                  <span className="font-medium text-ink-900">{format.shortLabel.pl}</span>
                  {!format.available ? (
                    <span className="text-xs text-ink-400">{dict.form.hints.formatUnavailable}</span>
                  ) : null}
                </span>
              </label>
            ))}
          </div>
          {errors.format ? (
            <p className="mt-2 text-sm text-red-600">{dict.form.errors[errors.format]}</p>
          ) : null}
        </div>

        <div>
          <span className="mb-2.5 block text-sm font-medium text-ink-700">{dict.form.labels.days}</span>
          <div className="flex flex-wrap gap-2">
            {weekdays.map((day) => {
              const checked = values.days.includes(day.slug);
              return (
                <label
                  key={day.slug}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset transition-colors",
                    checked
                      ? "bg-brand-600 text-white ring-brand-600"
                      : "text-ink-700 ring-ink-200 hover:ring-brand-300",
                  )}
                >
                  <input
                    type="checkbox"
                    name="days"
                    value={day.slug}
                    checked={checked}
                    onChange={() => toggleDay(day.slug)}
                    className="sr-only"
                  />
                  {day.shortLabel.pl}
                </label>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-ink-500">{dict.form.hints.days}</p>
          {errors.days ? <p className="mt-2 text-sm text-red-600">{dict.form.errors.days}</p> : null}
        </div>

        <Field
          id={fieldId("time")}
          label={dict.form.labels.time}
          error={errors.time ? dict.form.errors[errors.time] : undefined}
        >
          <Select
            id={fieldId("time")}
            name="time"
            required
            value={values.time}
            onChange={(e) => updateValue("time", e.target.value)}
            invalid={Boolean(errors.time)}
          >
            <option value="" disabled>
              {dict.form.placeholders.time}
            </option>
            {timeSlots.map((slot) => (
              <option key={slot.slug} value={slot.slug}>
                {slot.label.pl}
              </option>
            ))}
          </Select>
        </Field>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="text-base font-semibold text-ink-900">{dict.form.legendMessage}</legend>

        <Field
          id={fieldId("message")}
          label={dict.form.labels.message}
          optional
          hint={dict.form.hints.message}
          error={errors.message ? dict.form.errors[errors.message] : undefined}
        >
          <textarea
            id={fieldId("message")}
            name="message"
            rows={5}
            maxLength={MESSAGE_MAX_LENGTH}
            value={values.message}
            onChange={(e) => updateValue("message", e.target.value)}
            placeholder={dict.form.placeholders.message}
            className={cn(fieldClass, "resize-y", errors.message && invalidFieldClass)}
            aria-invalid={Boolean(errors.message)}
          />
          <p className="mt-1.5 text-right text-xs text-ink-400">
            {MESSAGE_MAX_LENGTH - values.message.length} {dict.form.charactersLeft}
          </p>
        </Field>

        <div>
          <label className="flex items-start gap-3 text-sm text-ink-700">
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={(e) => updateValue("consent", e.target.checked)}
              className={cn(
                "mt-0.5 size-4 shrink-0 rounded accent-brand-600",
                errors.consent && "outline outline-2 outline-red-400",
              )}
              aria-invalid={Boolean(errors.consent)}
            />
            <span>{dict.form.consentLabel}</span>
          </label>
          <p className="mt-2 pl-7 text-xs text-ink-500">{dict.form.consentDetails}</p>
          {errors.consent ? (
            <p className="mt-2 pl-7 text-sm text-red-600">{dict.form.errors.consent}</p>
          ) : null}
        </div>
      </fieldset>

      <div>
        <Button type="submit" size="lg" disabled={isSubmitting} fullWidth className="sm:w-auto">
          {isSubmitting ? dict.form.submitting : (submitLabel ?? dict.form.submit)}
        </Button>
        <p className="mt-3 text-xs text-ink-500">
          {dict.common.responseTime} · {dict.common.noCommitment}
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
};

function Field({ id, label, hint, error, optional, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-ink-700">
          {label}
        </label>
        <span className="text-xs text-ink-400">
          {optional ? dict.common.optional : dict.common.required}
        </span>
      </div>

      {isValidElement(children)
        ? cloneElement(children as ReactElement<Record<string, unknown>>, {
            "aria-describedby": [hintId, errorId].filter(Boolean).join(" ") || undefined,
          })
        : children}

      {hint ? (
        <p id={hintId} className="mt-1.5 text-xs text-ink-500">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean };

function Select({ invalid, className, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(fieldClass, "appearance-none pr-10", invalid && invalidFieldClass, className)}
      >
        {children}
      </select>
      <Icon
        name="chevron-down"
        size={18}
        className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink-400"
      />
    </div>
  );
}
