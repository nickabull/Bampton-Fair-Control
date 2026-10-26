# Bampton Fair 2026 — Single-Mac Operations Checklist

**Status: rehearsal only; not yet signed off for real sensitive incident data.**

## Before opening control
1. Use the agreed, protected council Mac and Chrome profile. Confirm Mac login, FileVault and physical security.
2. Confirm the approved operational application version; don't make development changes during the fair.
3. Connect Stream Deck and test Radio 2 (Ctrl+Shift+J), Radio 6 (Ctrl+Shift+K), and a couple of the other 18 buttons.
4. Confirm the stall register and all 12 maps are loaded. Test Stall 64 → Newton Square.
5. In Backups & System, authorise the two approved files if Chrome prompts. Press BACK UP NOW / RESUME.
6. Check **both files' modification times in Finder**. Run the seven-point pre-flight check.
7. Verify the JSON backup using the **read-only** file checker. This only validates structure, not restoration.
8. Save a backup copy in an independent, council-approved secure location. Maintain paper/Excel fallback.

## Rehearsal sequence — test information only
1. Select an on-duty operator and verify handover audit.
2. Select a radio from Stream Deck; confirm its label and received timestamp.
3. Type TEST ONLY message; save with Ctrl+Enter.
4. Search Stall 64; open its area map without exposing phone data unnecessarily.
5. Create a TEST ONLY incident; create a follow-up action; verify both in the log.
6. Disconnect Wi-Fi; reload and confirm the app launches from cache, can select a radio, and save another TEST ONLY message.
7. Reconnect; authorise file writes if prompted; verify both CSV and JSON modification times and JSON read-back.
8. Open the CSV in Excel and check the test entries, timestamps and operator handover.
9. **Do not use Restore JSON on the production browser to test recovery.** Use an isolated Chrome profile/environment if recovery testing is approved.

## Incident-day cautions
- Current development URL is public GitHub Pages. Operational data stays in the browser, but any code served from that origin has access to that origin's browser storage.
- The app currently writes automatic backups every two minutes **only while the browser is active** and file write permission is granted.
- The green pre-flight status means checks passed at that moment; it is not a security assessment, verified full recovery, or confirmation of council approval.
- Don't clear Chrome site data, switch profiles, or change the app URL without first exporting and checking a full backup.
- Do not store unapproved personal data in the public repository, source files, issues or shared screenshots.
- In a malfunction: switch to paper log/approved Excel fallback; preserve backup files; never overwrite current data to troubleshoot live operations.

## Deployment hold points
- [ ] Council data-handling approval for single Mac
- [ ] Protected, fixed operational build verified offline on the chosen Mac
- [ ] Separate full restoration exercise
- [ ] End-to-end rehearsal with dummy incident
- [ ] Independent backup copy
