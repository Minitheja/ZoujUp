# Mail Response Page — Website Implementation Spec

For the `zoujup.com` website team. The backend now emails a link to
`https://zoujup.com/mail-response/{token}` and expects a real page to exist
there. This doc is the full API contract needed to build it — the backend
side is done.

## Why this page exists

Admin-composed emails can ask a recipient to respond Yes/No (e.g. "Interested
in a trial?"). Previously the email itself carried two pre-chosen links
("Yes" / "No"). That pattern got real test emails placed in spam/junk folders
even with clean domain authentication — filters read "two decision links next
to consent-style text" as a phishing/survey pattern. The email now carries
one plain link to this page; the recipient chooses on the website instead.

## Page route

`GET /mail-response/:token` — `:token` is an opaque UUID from the email link,
no auth required (the recipient isn't logged in).

## What the page should do

1. On load, call the status endpoint (below) with the token from the URL.
2. If `valid: false` → show "This link is invalid or has expired."
3. If `alreadyResponded: true` → show "We already recorded your response"
   (optionally show which one, via the `response` field).
4. Otherwise → show two buttons labeled `positiveLabel` / `negativeLabel`
   (e.g. "Interested" / "Not interested" — these are admin-customizable per
   send, don't hardcode "Yes"/"No").
5. On button click, call the submit endpoint (below) with `answer: "positive"`
   or `"negative"` matching which button was clicked.
6. Show the returned `message` (success or already-responded) and disable
   further submission.

## API contract

Base URL: the backend's own domain (`https://api.zoujup.com` in production),
**not** the website's own domain — this is a cross-origin call, CORS is
already configured on the backend to allow `zoujup.com`.

### `GET /api/v1/public/mail-response-api/:token/status`

Read-only, no side effects.

```json
{
  "valid": true,
  "alreadyResponded": false,
  "response": null,
  "positiveLabel": "Interested",
  "negativeLabel": "Not interested"
}
```

If the token doesn't exist: `{ "valid": false, "alreadyResponded": false, "response": null, "positiveLabel": "Yes", "negativeLabel": "No" }`.

If already responded: `"alreadyResponded": true, "response": "positive" | "negative"`.

### `POST /api/v1/public/mail-response-api/:token/answer`

Body: `{ "answer": "positive" | "negative" }`

```json
{ "success": true, "message": "Your response (\"Interested\") has been recorded." }
```

On invalid token, invalid answer, or already-responded: `{ "success": false, "message": "..." }` — show the message as-is, no special-casing needed on your side.

## Notes

- Do not call these endpoints on page load before the user acts, other than
  the one `status` GET — no separate confirm step is needed, a real button
  click is what makes it safe (mail-security scanners crawl GET links in
  emails automatically, but they don't click page buttons or submit forms).
- Backend requires `FRONTEND_BASE_URL` env var to be set to
  `https://zoujup.com` in production for the emailed link to be correct —
  confirm with backend that this is set if links come through pointing at
  `localhost` or the wrong domain.
- Old response links already sent (format `.../mail-response/{token}/{answer}`
  on the API domain) still work independently — this is a separate, additive
  flow, nothing to reconcile.
