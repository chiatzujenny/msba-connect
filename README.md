# MSBA Connect

A web prototype that helps MSBA students and alumni find relevant career connections and request coffee chats. Members can seek advice and share their own experience.

## Run locally

Open `index.html` in Chrome or Edge. No build, package installation, account, or API key is required.

You can also serve the repository with Python:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`.

## What the prototype supports

- Profiles with previous background, target role, career questions, and conversation interests.
- Recommendations with explanations based on profile rules.
- Mentor career journeys, profile filters, and offered time slots.
- Editable coffee-chat requests, review before submission, and pending status.
- A mentor view for accepting requests and confirming bookings.
- Capacity checks, reserved slots, cancellation, and saved browser state.
- Reciprocal roles: a member can seek guidance and offer experience.

The role selector demonstrates both sides of a booking in the same browser. It is not authentication or communication between separate users. Records use browser local storage and are not shared across computers.

## Wide HD demo

[Watch or download the narrated 1080p demo](media/MSBA-Connect-Demo-Widescreen-HD.mp4)

The MP4 runs approximately 59.7 seconds at 1920 × 1080. It demonstrates Jason's profile entry, recommendations, Alex's career journey, a booking request, mentor acceptance, and Jason offering accounting guidance.

`demo.html` provides the recording view of the same application with isolated sample state and interaction cues. `demo.html?intro=1&wide=1&hd=1` opens its widescreen introduction. Recording mode uses its own browser storage key.

## Current implementation

The platform uses HTML, CSS, and JavaScript. Profiles are fictional. Matching uses local rules, and suggested questions and request drafts use templates. No AI model is connected.

Shared accounts, a shared database, Google Calendar and Meet integration, an AI rehearsal coach, and generated post-chat follow-up are future work. The prototype does not send real invitations or messages. Optional Google Fonts load when online; system fallback fonts remain available offline.

## Repository contents

- `index.html`, `app.js`, `style.css`: the platform.
- `demo.html`, `recording.js`, `recording.css`: the recording view.
- `media/MSBA-Connect-Demo-Widescreen-HD.mp4`: the selected demo video.

Slide decks, PDFs, documents, original voice recordings, earlier videos, synthetic research files, and build artifacts are excluded.

This student project is not an official USC service or endorsed product.
