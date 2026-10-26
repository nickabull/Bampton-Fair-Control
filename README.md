# Bampton Fair Control — pilot V1

GitHub Pages-hosted, offline-capable prototype. No real incident data must be entered until security and reliability review.

Features: radio buttons, operator handover, audit events, incident/action status, local IndexedDB storage, photo attachments, CSV export and JSON backup/restore, Stream Deck Alt+1..9 and Ctrl+Enter shortcuts.

## Publish
Settings > Pages > Deploy from branch > main / (root).

## Security and reliability
This site is PUBLIC and has NO AUTHENTICATION or encryption. Browser storage stays on the current device and can be erased. Never commit personal records to GitHub. Cloudflare Access is not configured; putting Access on a separate domain while leaving the original GitHub Pages URL public does not secure the application. For real usage choose a single genuinely protected origin (such as Cloudflare Pages with Access), then thoroughly test offline access and backups on the work laptop. Save protected off-device backups frequently. Keep original Excel process as backup for the event. Photos may have privacy sensitivity.

## Offline test
Open online and wait for service-worker installation, disconnect, reload, enter a dummy message, download backups, reconnect. Confirm storage remains consistent and that your corporate device allows service workers and downloads.
