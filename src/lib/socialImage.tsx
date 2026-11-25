import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

/*
 * The 1200x630 card shown when the site is shared (Facebook, LinkedIn, X,
 * messaging apps). Text only, in the site's near-black and accent, drawn from words
 * already on the page. No network fetches, so the build never depends on one.
 * Note: satori (the renderer) needs `display: flex` on any div with 2+ children.
 */
const INK = "#141414";
const SIGN = "#FFB020";
const MUTED = "#A3A3A3";

export function renderSocialImage(size: { width: number; height: number }) {
  const host = new URL(SITE.url).host;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: INK,
        padding: "64px 72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 28,
            height: 28,
            background: SIGN,
            borderRadius: 6,
            marginRight: 18,
          }}
        />
        <div style={{ fontSize: 30, color: MUTED }}>{host}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05, color: "#FFFFFF" }}>
          {SITE.name}
        </div>
        <div style={{ display: "flex", marginTop: 32 }}>
          <div
            style={{
              display: "flex",
              background: SIGN,
              color: INK,
              fontSize: 46,
              fontWeight: 700,
              padding: "10px 26px",
              borderRadius: 8,
            }}
          >
            Full-stack developer
          </div>
        </div>
        <div
          style={{
            fontSize: 34,
            lineHeight: 1.35,
            color: MUTED,
            marginTop: 34,
            maxWidth: 940,
          }}
        >
          Sign-ins, payments and dashboards for small businesses and schools.
        </div>
      </div>
    </div>,
    { ...size },
  );
}
