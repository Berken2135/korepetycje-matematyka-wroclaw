# Project: Private Mathematics Tutoring Platform (Wrocław, Poland)

## What this is

A modern, professional MVP website connecting students with a real mathematics
tutor in Wrocław. This is NOT a generic education website.

The main goal is conversion: getting students to submit a lesson request.

## Current business facts

- Only subject at launch: Mathematics
- Only one tutor at launch
- Lessons are 1-to-1 and online
- Price: 50 PLN per 60-minute lesson
- Clearly communicate that lessons are online

Build the structure so subjects, tutors, prices and lesson formats can be added
or changed later without a redesign. Conceptually the system should support:

    Mathematics -> Tutor A -> 50 PLN/hour
    Physics     -> Tutor B -> 70 PLN/hour
    English     -> Tutor C -> 60 PLN/hour

But show ONLY Mathematics and the current tutor publicly for now.
Keep all business data in editable content files, never hardcoded in components.

## Audience

- Students in Wrocław
- Parents looking for a mathematics tutor
- Polish-speaking customers
- Potentially English-speaking international students later

## Language

First version in Polish. Structure the code so English can be added later.

## Brand and design

Clean, modern education brand. Professional but friendly — NOT childish.
Strong typography, generous spacing, subtle animations, premium SaaS feel.
Should look like a real startup MVP, not a template or student project.

## Pages

### Home
Hero, clear headline, short explanation, tutor introduction, why choose us,
how it works, pricing, testimonials, FAQ, final CTA, footer.

- Primary CTA: "Umów pierwszą lekcję"
- Secondary CTA: "Zobacz ofertę"

### Tutor profile
Photo placeholder, name placeholder, short biography, education/experience,
areas of expertise, student levels, teaching format, online/in-person info,
price, CTA to book or contact.

### Pricing
Simple and transparent. Placeholder prices that are easy to change.
Clearly explain lesson duration and what is included.

### Booking / Contact
Simple form with these fields:
name, email, phone (optional), student age/level, preferred lesson format,
preferred days/times, message.

Show a clear success message after submitting.

No account system and no calendar in the MVP. The form only collects the
request so the tutor can follow up.

### FAQ
Realistic questions about lesson duration, online lessons, in-person lessons
in Wrocław, cancellation, payment, the first lesson, student levels.

### About
Concise, trustworthy explanation of the platform and its mission.

### Contact
Simple contact information plus contact form.

## UX requirements

- CTAs visible throughout the site
- Small number of navigation items
- Mobile-first responsive design
- Excellent performance
- Accessible forms
- Clear error and success states
- No unnecessary features

## SEO

Target these Polish searches:

- korepetycje matematyka Wrocław
- korepetycje z matematyki Wrocław
- matematyka korepetycje
- korepetycje matematyka online

Provide proper page titles, meta descriptions, semantic HTML, correct heading
hierarchy, Open Graph metadata, and basic structured data where appropriate.

## Tech stack

Next.js, TypeScript, Tailwind CSS. Reusable, clean components.

Required components: Navbar, Footer, Hero, CTA, TutorCard, PricingCard, FAQ,
Testimonials, Contact/BookingForm.

## Hard constraints

- No fake payment system
- No fake user authentication
- No unnecessary dashboards
- No fake external integrations — use placeholders where a real integration
  would be required
- Do not add features just because they are technically possible
- Do not over-engineer the first version

## Definition of done

`npm run build` passes with no errors and no type errors, all pages generate,
forms work with visible error and success states, layout holds on mobile,
and the site feels like a real business that could accept its first customer today.