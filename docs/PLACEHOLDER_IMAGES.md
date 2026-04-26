# Placeholder image shopping list

These photos were inherited from the Hudhud build and currently sit in `public/images/placeholders/`. They are visual stand-ins only — every one needs to be replaced before the Qore Maps landing page goes live. None of them depict Nigeria.

| Target path | Current Hudhud content | What it should become for Nigeria |
|---|---|---|
| `public/images/placeholders/hero-bg.webp` | Riyadh skyline / banner background | Lagos cityscape — Lekki / V.I., Third Mainland Bridge at dusk, or a wide street scene |
| `public/images/placeholders/hero-bg-mobile.webp` | Riyadh banner, mobile crop | Mobile crop of the same Lagos hero shot |
| `public/images/placeholders/hero-phone.webp` | Hand holding phone showing Riyadh map UI | Hand holding phone showing Qore Maps Lagos UI mockup |
| `public/images/placeholders/person-holding-phone.webp` | Person holding phone, Saudi context | Nigerian using Qore Maps in a Lagos setting |
| `public/images/placeholders/person-holding-phone-mobile.webp` | Mobile crop of above | Mobile crop of the Nigerian version |
| `public/images/placeholders/driver-single.webp` | Saudi man driving | Nigerian driver behind the wheel — daytime, natural |
| `public/images/placeholders/driver-pair.webp` | Two Saudi men in a car | Two Nigerian friends in a car — relaxed, not staged |
| `public/images/placeholders/map-and-phone.webp` | Map + phone composite, Riyadh | Same composite with Lagos map data |
| `public/images/placeholders/road-conditions-ui.webp` | Mobile speed-limit UI (Saudi context) | Qore Maps mocked screen showing pothole / road-closure / flood alert |
| `public/images/placeholders/lane-guidance-1.webp` | Lower-half app screenshot, Riyadh roads | Lane guidance UI screenshot on a Lagos road (e.g., Lekki-Epe) |
| `public/images/placeholders/lane-guidance-2.webp` | Lower-half app screenshot, alt | Second lane-guidance screenshot, different junction |
| `public/images/placeholders/upper-screenshot-1.webp` | Upper-half app screenshot | Upper-half Qore Maps screen on a Lagos route |
| `public/images/placeholders/upper-screenshot-2.webp` | Upper-half app screenshot, alt | Alt upper-half Qore Maps screen |
| `public/images/placeholders/carplay.webp` | CarPlay dashboard with Riyadh map | CarPlay dashboard with Qore Maps Lagos navigation |
| `public/images/placeholders/carplay-small.webp` | CarPlay small variant | Small CarPlay variant with Lagos map |
| `public/images/placeholders/arrival.webp` | "You've arrived" popup over a Riyadh POI | Arrival popup over a recognisable Lagos POI (e.g., Nike Art Gallery, Lekki Conservation Centre) |
| `public/images/placeholders/report-road.webp` | Community road-report UI | Same UI showing a Nigerian-flavoured report (pothole on Ikorodu Rd, flood on Falomi) |
| `public/images/placeholders/contributor-1.webp` | Saudi community contributor card | Nigerian contributor portrait + first name + Lagos neighbourhood |
| `public/images/placeholders/contributor-2.webp` | Saudi community contributor card | Second Nigerian contributor |
| `public/images/placeholders/contributor-3.webp` | Saudi community contributor card | Third Nigerian contributor |
| `public/images/placeholders/community-bg.webp` | Community section background, Saudi-toned | Soft Lagos street-life background (low contrast, blurred OK) |
| `public/images/placeholders/street-view.jpg` | Riyadh street view (panoramic) | Lagos street view — Marina, Broad Street, or a Lekki backstreet |
| `public/images/placeholders/street-view-mobile.jpg` | Riyadh street view, mobile | Mobile crop of the Lagos street view |
| `public/images/placeholders/poi-1.jpg` | Agio (Riyadh restaurant) | Lagos POI #1 — e.g., a recognisable restaurant (Nkoyo, RSVP, Terra Kulture) |
| `public/images/placeholders/poi-2.jpg` | Ashjar Coffee Roasters (Riyadh) | Lagos POI #2 — a coffee shop / cafe (Cafe Neo, Brew & Co) |
| `public/images/placeholders/poi-3.webp` | Nahdi Pharmacy | Lagos POI #3 — pharmacy (Medplus, HealthPlus) |
| `public/images/placeholders/poi-4.webp` | Solitaire Mall | Lagos POI #4 — mall (Ikeja City Mall, Palms, Circle Mall) |
| `public/images/placeholders/poi-5.webp` | Boulevard World | Lagos POI #5 — entertainment / venue (Hard Rock Cafe, Muri Okunola Park) |
| `public/images/placeholders/poi-6.webp` | Sports Boulevard | Lagos POI #6 — outdoor / sports (Lekki Conservation, Tarkwa Bay) |
| `public/images/placeholders/poi-7.webp` | Diriyah Art Futures | Lagos POI #7 — culture / arts (Nike Art Gallery, New Afrika Shrine, Freedom Park) |
| `public/images/placeholders/poi-8.webp` | Al Habib Hospital | Lagos POI #8 — hospital (LUTH, Reddington, Lagoon Hospitals) |

## Decisions made during cleanup

- **Six remaining Riyadh POI photos were deleted** rather than carried forward as placeholders: `modern_mosque.webp`, `musmaq_palace.webp`, `living_room.webp`, `petrol_station.webp`, `riyadh_bank.webp`, `park.jpg`. Reason: eight POI placeholders are enough to scaffold the Lagos POI grid, and the remainder were redundant Saudi-flavoured photography that would only need to be sourced fresh anyway. If the final POI grid needs more than eight cards, source the additional Lagos POIs directly.
- **`person-holding-phone(.mobile).webp` were kept** even though they weren't on the original move list — they're useful generic phone-in-hand placeholders and there was no reason to discard them.

## Replacement workflow

1. Source each Lagos image (licensed stock, in-house shoot, or Mapillary export — note licence on every file).
2. Match the original aspect ratio and roughly the same dimensions before swapping in.
3. Replace the file in place at the same path — no component edits needed.
4. Strike the corresponding row from this table.
