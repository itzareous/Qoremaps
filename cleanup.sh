#!/usr/bin/env bash
# Cleanup script: wipe Hudhud-branded artifacts and reorganize kept photography.
# Idempotent: safe to re-run; missing files are skipped.
set -u
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

rm_f() { [ -e "$1" ] && rm -f "$1" && echo "deleted: $1" || echo "skip:    $1"; }
rm_rf() { [ -e "$1" ] && rm -rf "$1" && echo "deleted: $1" || echo "skip:    $1"; }
mv_f() {
  if [ -e "$1" ]; then
    mkdir -p "$(dirname "$2")"
    mv "$1" "$2" && echo "moved:   $1 -> $2"
  else
    echo "skip:    $1 (not found)"
  fi
}

# --- Hudhud build artifacts ---
rm_f "index.html"
rm_rf "dist"
rm_f "public/assets/index.iRX7H25R.css"
rm_f "public/assets/gtm.js"
rm_f "public/assets/cf-beacon.js"
rm_f "public/assets/iui.html"
rm_f "public/assets/icom.html"
rm_f "public/assets/partytown-sandbox-sw.html"
for f in public/assets/*.astro_astro_type_script_*.js; do rm_f "$f"; done

# --- Hudhud branding ---
rm_f "public/assets/favicon.svg"
rm_f "public/assets/open-gaph-cover.webp"
rm_f "public/assets/qr-code.BTeH94mN.svg"
rm_f "public/assets/logo-desktop.BOZ9m_p5.webp"
rm_f "public/assets/logo-mobile.I3RV5e1G.webp"
rm_f "public/assets/logo-desktop-ar.fwpx5asi.webp"
rm_f "public/assets/logo-mobile-ar.Bnm0wj48.webp"

# --- Astro-bundled fonts (Inter / Plus Jakarta / Huwiya) ---
rm_rf "public/assets/fonts"

# --- Move kept photography to placeholders/ ---
mv_f "public/assets/banner-bg.Be1bXM1i.webp"                       "public/images/placeholders/hero-bg.webp"
mv_f "public/assets/banner-mobile.ce2fWGwc.webp"                   "public/images/placeholders/hero-bg-mobile.webp"
mv_f "public/assets/hand-holding-phone-centered.DmemrVfX.webp"     "public/images/placeholders/hero-phone.webp"
mv_f "public/assets/man-driving.DFNDEnR3.webp"                     "public/images/placeholders/driver-single.webp"
mv_f "public/assets/men-in-car.C2X1wYo4.webp"                      "public/images/placeholders/driver-pair.webp"
mv_f "public/assets/map-with-phone-over.CiGaFgcp.webp"             "public/images/placeholders/map-and-phone.webp"
mv_f "public/assets/mobile-speed-limit.Dg8d6ZxJ.webp"              "public/images/placeholders/road-conditions-ui.webp"
mv_f "public/assets/lower-half-screenshot.DP4L76JL.webp"           "public/images/placeholders/lane-guidance-1.webp"
mv_f "public/assets/lower-half-screenshot-2.CZKh2Rrr.webp"         "public/images/placeholders/lane-guidance-2.webp"
mv_f "public/assets/upper-half-screenshot.VEyy3iwY.webp"           "public/images/placeholders/upper-screenshot-1.webp"
mv_f "public/assets/upper-half-screenshot-2.BjzL30yE.webp"         "public/images/placeholders/upper-screenshot-2.webp"
mv_f "public/assets/carplay-dashboard-cropped-with-text.BUOSQ-wR.webp" "public/images/placeholders/carplay.webp"
mv_f "public/assets/carplay-dashboard-small.BXfhl3G_.webp"         "public/images/placeholders/carplay-small.webp"
mv_f "public/assets/arrival-popup-card.C3N1lvQ2.webp"              "public/images/placeholders/arrival.webp"
mv_f "public/assets/report-road.-OgjG17a.webp"                     "public/images/placeholders/report-road.webp"
mv_f "public/assets/card-1.Db0SDphk.webp"                          "public/images/placeholders/contributor-1.webp"
mv_f "public/assets/card-2.CH6YjFWr.webp"                          "public/images/placeholders/contributor-2.webp"
mv_f "public/assets/card-3.Cqq8eOty.webp"                          "public/images/placeholders/contributor-3.webp"
mv_f "public/assets/card-left-bg.DZqjwsl-.webp"                    "public/images/placeholders/community-bg.webp"
mv_f "public/assets/street-view.CoJlfWyX.jpg"                      "public/images/placeholders/street-view.jpg"
mv_f "public/assets/street-view-sm.BN2VUjDs.jpg"                   "public/images/placeholders/street-view-mobile.jpg"

# POI photos (8 mapped, 6 dropped — see decision note in PLACEHOLDER_IMAGES.md)
mv_f "public/assets/agio.hVcl01j5.jpg"                             "public/images/placeholders/poi-1.jpg"
mv_f "public/assets/ashjar.B5jyulsY.jpg"                           "public/images/placeholders/poi-2.jpg"
mv_f "public/assets/nahdi.DfFOK1Wh.webp"                           "public/images/placeholders/poi-3.webp"
mv_f "public/assets/solitaire.DaGCUE6a.webp"                       "public/images/placeholders/poi-4.webp"
mv_f "public/assets/boulevard_world.CNbbzB98.webp"                 "public/images/placeholders/poi-5.webp"
mv_f "public/assets/Sports_Boulevard.BTYPm-4s.webp"                "public/images/placeholders/poi-6.webp"
mv_f "public/assets/Diriyah Art Futures.CXk7gmUz.webp"             "public/images/placeholders/poi-7.webp"
mv_f "public/assets/alhabib_hospital.kxB2wQcM.webp"                "public/images/placeholders/poi-8.webp"

# Remaining 6 POIs: delete. Reason: 8 placeholders is enough to scaffold the
# Lagos POI grid; the remainder are redundant and Riyadh-flavored. Easier to
# re-source 6 fresh Lagos POIs than to keep extra Saudi photos around.
rm_f "public/assets/modern_mosque.a4r8lvcL.webp"
rm_f "public/assets/musmaq_palace.D-weZ5D3.webp"
rm_f "public/assets/living_room.BQGXomoo.webp"
rm_f "public/assets/petrol_station.BUgnDp79.webp"
rm_f "public/assets/riyadh_bank.BMkLfESC.webp"
rm_f "public/assets/park.BpS7sWqY.jpg"

# Misc cruft
rm_f "public/.DS_Store"

# Drop the now-empty assets folder
if [ -d "public/assets" ]; then
  remaining=$(ls -A public/assets 2>/dev/null | wc -l | tr -d ' ')
  if [ "$remaining" = "0" ]; then
    rmdir public/assets && echo "deleted: public/assets/ (empty)"
  else
    echo "warn:    public/assets/ not empty, leaving in place. Contents:"
    ls -A public/assets
  fi
fi

# package-lock + node_modules will be regenerated
rm_f "package-lock.json"
rm_rf "node_modules"

echo "done."
