import Link from '@docusaurus/Link';
import React from 'react';

const BADGE_TYPES: Record<string, string> = {
  SDK: 'SDK',
  Android: 'Android',
  iOS: 'iOS',
} as const;

type BadgeType = (typeof BADGE_TYPES)[keyof typeof BADGE_TYPES];

const THEME_COLORS: Record<BadgeType | 'default', string> = {
  SDK: '#FFB300',
  Android: 'rgb(1, 135, 95)',
  iOS: 'rgb(0, 112, 201)',
  default: '#999999',
};

type VersionString = `v.${number}.${number}.${number}`;

type BadgeWithVersionSVGProps = {
  type: BadgeType | string;
  version: VersionString; // e.g. "v1.7.0"
};

export type BadgeWithVersionProps = {
  type: BadgeType | string;
  version: VersionString; // e.g. "v1.7.0"
  link?: string;
};

export const SDKBadge = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="20"
      role="img"
      aria-label="SDK"
      style={{ position: 'relative', zIndex: '4' }}
    >
      <title>SDK</title>
      <linearGradient id="sdk-linear-gradient" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
        <stop offset="1" stop-opacity=".1" />
      </linearGradient>
      <clipPath id="sdk-clip-path">
        <rect width="51" height="20" rx="3" fill="#fff" />
      </clipPath>
      <g clip-path="url(#sdk-clip-path)">
        <rect width="0" height="20" fill="#555" />
        <rect x="0" width="51" height="20" fill="#555" />
        <rect width="51" height="20" fill="url(#sdk-linear-gradient)" />
      </g>
      <g
        fill="#fff"
        text-anchor="middle"
        font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
        text-rendering="geometricPrecision"
        font-size="110"
      >
        <image
          x="5"
          y="3"
          width="14"
          height="14"
          href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTEyLjAwMDAwMHB0IiBoZWlnaHQ9IjUxMi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjRkZCODAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMjQ4MCA0MjI4IGMtNTMgLTI2IC0yMTkgLTE5MiAtMTA5NiAtMTA5NCAtNDkgLTUwIC0yMTEgLTIxNyAtMzYwCi0zNzAgLTE1MCAtMTU0IC0zMTggLTMyNiAtMzc0IC0zODQgLTI5MCAtMjk4IC0zMTUgLTMyOSAtMzI2IC00MTEgLTkgLTY3IDI3Ci0xMzAgMTM5IC0yNDIgOTIgLTkyIDIwMyAtMTkyIDI1NiAtMjMxIDE2IC0xMiA1NSAtNDEgODcgLTY1IDgxIC02MiAyNTEgLTE2OAozNjQgLTIyOCAzMzQgLTE3OCA3NjAgLTI5OSAxMTYyIC0zMzAgMTU3IC0xMiA0NjkgLTYgNTYzIDExIDExIDIgNDYgNyA3OSAxMQo5MiAxMSAzMjAgNTYgMzg2IDc2IDE5IDUgNDMgMTIgNTIgMTQgMzAgNyAyNTkgODUgMjk0IDEwMCAxOSA4IDUxIDIyIDcyIDMxCjE5MiA4NCAzOTAgMTk4IDU1NyAzMjMgMTkyIDE0NCAzOTkgMzQzIDQ0MCA0MjUgNjAgMTE5IDM2IDE1OCAtMzA1IDUwNiAtNjMKNjQgLTI2MSAyNjcgLTQ0MCA0NTAgLTE3OSAxODMgLTM3MiAzODEgLTQzMCA0NDAgLTU4IDU5IC0yNTEgMjU3IC00MzAgNDQwCi00NDcgNDU4IC00NDAgNDUxIC00OTAgNDkxIC04MiA2NSAtMTI2IDczIC0yMDAgMzd6IG0tNDg0IC0xMzI2IGM1NiAtMzAgODkKLTEwMCA4MiAtMTczIC04IC04MyAtNjQgLTEzOSAtMTQ2IC0xNDcgLTEwNyAtMTAgLTE4NCA2MSAtMTg0IDE2OCAwIDEwNyA3MgoxNzUgMTc4IDE2NiAyOCAtMiA2MCAtOCA3MCAtMTR6IG0xMjYzIDUgYzg1IC0zMCAxMjYgLTE1MCA4MiAtMjQxIC0yOSAtNjAKLTg5IC05MCAtMTY1IC04NCAtOTMgOCAtMTQ5IDcyIC0xNDggMTcwIDEgMTIzIDExMiAxOTcgMjMxIDE1NXoiLz4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTQyMDggNDIzNCBjLTE4IC02IC0zNyAtMTIgLTQzIC0xNCAtMzAgLTggLTYxIC0yMyAtMTAyIC01MSAtMjQwCi0xNjUgLTI3NCAtNDkyIC03MyAtNjk4IDIyNyAtMjMyIDYxNCAtMTc0IDc1NiAxMTQgNDEgODQgNTUgMTUyIDQ4IDIzNiAtMTQKMTY0IC0xMTEgMzA3IC0yNTcgMzc5IC0xMDEgNDkgLTI0MyA2NCAtMzI5IDM0eiIvPgo8L2c+Cjwvc3ZnPgo="
        />
        <text
          aria-hidden="true"
          x="345"
          y="150"
          fill="#010101"
          fill-opacity=".3"
          transform="scale(.1)"
          textLength="230"
        >
          SDK
        </text>
        <text
          x="345"
          y="140"
          transform="scale(.1)"
          fill="#fff"
          textLength="230"
        >
          SDK
        </text>
      </g>
    </svg>
  );
};

export const AndroidBadge = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="20"
      role="img"
      aria-label="Android"
      style={{ position: 'relative', zIndex: '4' }}
    >
      <title>Android</title>
      <linearGradient id="android-linear-gradient" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
        <stop offset="1" stop-opacity=".1" />
      </linearGradient>
      <clipPath id="android-clip-path">
        <rect width="71" height="20" rx="3" fill="#fff" />
      </clipPath>
      <g clip-path="url(#android-clip-path)">
        <rect width="0" height="20" fill="#555" />
        <rect x="0" width="71" height="20" fill="#555" />
        <rect width="71" height="20" fill="url(#android-linear-gradient)" />
      </g>
      <g
        fill="#fff"
        text-anchor="middle"
        font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
        text-rendering="geometricPrecision"
        font-size="110"
      >
        <image
          x="5"
          y="3"
          width="14"
          height="14"
          href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM0REQzg0IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QW5kcm9pZDwvdGl0bGU+PHBhdGggZD0iTTE4LjQzOTUgNS41NTg2Yy0uNjc1IDEuMTY2NC0xLjM1MiAyLjMzMTgtMi4wMjc0IDMuNDk4LS4wMzY2LS4wMTU1LS4wNzQyLS4wMjg2LS4xMTEzLS4wNDMtMS44MjQ5LS42OTU3LTMuNDg0LS44LTQuNDItLjc4Ny0xLjg1NTEuMDE4NS0zLjM1NDQuNDY0My00LjI1OTcuODIwMy0uMDg0LS4xNDk0LTEuNzUyNi0zLjAyMS0yLjAyMTUtMy40ODY0YTEuMTQ1MSAxLjE0NTEgMCAwIDAtLjE0MDYtLjE5MTRjLS4zMzEyLS4zNjQtLjkwNTQtLjQ4NTktMS4zNzktLjIwMy0uNDc1LjI4Mi0uNzEzNi45MzYxLS4zODg2IDEuNTAxOSAxLjk0NjYgMy4zNjk2LS4wOTY2LS4yMTU4IDEuOTQ3MyAzLjM1OTMuMDE3Mi4wMzEtLjQ5NDYuMjY0Mi0xLjM5MjYgMS4wMTc3QzIuODk4NyAxMi4xNzYuNDUyIDE0Ljc3MiAwIDE4Ljk5MDJoMjRjLS4xMTktMS4xMTA4LS4zNjg2LTIuMDk5LS43NDYxLTMuMDY4My0uNzQzOC0xLjkxMTgtMS44NDM1LTMuMjkyOC0yLjc0MDItNC4xODM2YTEyLjEwNDggMTIuMTA0OCAwIDAgMC0yLjEzMDktMS42ODc1Yy42NTk0LTEuMTIyIDEuMzEyLTIuMjU1OSAxLjk2NDktMy4zODQ4LjIwNzctLjM2MTUuMTg4Ni0uNzk1Ni0uMDA3OS0xLjExOTFhMS4xMDAxIDEuMTAwMSAwIDAgMC0uODUxNS0uNTMzMmMtLjUyMjUtLjA1MzYtLjkzOTIuMzEyOC0xLjA0ODguNTQ0OXptLS4wMzkxIDguNDYxYy4zOTQ0LjU5MjYuMzI0IDEuMzMwNi0uMTU2MyAxLjY1MDMtLjQ3OTkuMzE5Ny0xLjE4OC4wOTg1LTEuNTgyLS40OTQxLS4zOTQ0LS41OTI3LS4zMjQtMS4zMzA3LjE1NjMtMS42NTA0LjQ3MjctLjMxNSAxLjE4MTItLjEwODYgMS41ODIuNDk0MXpNNy4yMDcgMTMuNTI3M2MuNDgwMy4zMTk3LjU1MDYgMS4wNTc3LjE1NjMgMS42NTA0LS4zOTQuNTkyNi0xLjEwMzguODEzOC0xLjU4NC40OTQxLS40OC0uMzE5Ny0uNTUwMy0xLjA1NzctLjE1NjMtMS42NTA0LjQwMDgtLjYwMjEgMS4xMDg3LS44MTA2IDEuNTg0LS40OTQxeiIvPjwvc3ZnPg=="
        />
        <text
          aria-hidden="true"
          x="445"
          y="150"
          fill="#010101"
          fill-opacity=".3"
          transform="scale(.1)"
          textLength="430"
        >
          Android
        </text>
        <text
          x="445"
          y="140"
          transform="scale(.1)"
          fill="#fff"
          textLength="430"
        >
          Android
        </text>
      </g>
    </svg>
  );
};

export const iOSBadge = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="20"
      role="img"
      aria-label="iOS"
      style={{ position: 'relative', zIndex: '4' }}
    >
      <title>iOS</title>
      <linearGradient id="ios-linear-gradient" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
        <stop offset="1" stop-opacity=".1" />
      </linearGradient>
      <clipPath id="ios-clip-path">
        <rect width="47" height="20" rx="3" fill="#fff" />
      </clipPath>
      <g clip-path="url(#ios-clip-path)">
        <rect width="0" height="20" fill="#555" />
        <rect x="0" width="47" height="20" fill="#555" />
        <rect width="47" height="20" fill="url(#ios-linear-gradient)" />
      </g>
      <g
        fill="#fff"
        text-anchor="middle"
        font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
        text-rendering="geometricPrecision"
        font-size="110"
      >
        <image
          x="5"
          y="3"
          width="14"
          height="14"
          href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZXNtb2tlIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QXBwbGU8L3RpdGxlPjxwYXRoIGQ9Ik0xMi4xNTIgNi44OTZjLS45NDggMC0yLjQxNS0xLjA3OC0zLjk2LTEuMDQtMi4wNC4wMjctMy45MSAxLjE4My00Ljk2MSAzLjAxNC0yLjExNyAzLjY3NS0uNTQ2IDkuMTAzIDEuNTE5IDEyLjA5IDEuMDEzIDEuNDU0IDIuMjA4IDMuMDkgMy43OTIgMy4wMzkgMS41Mi0uMDY1IDIuMDktLjk4NyAzLjkzNS0uOTg3IDEuODMxIDAgMi4zNS45ODcgMy45Ni45NDggMS42MzctLjAyNiAyLjY3Ni0xLjQ4IDMuNjc2LTIuOTQ4IDEuMTU2LTEuNjg4IDEuNjM2LTMuMzI1IDEuNjYyLTMuNDE1LS4wMzktLjAxMy0zLjE4Mi0xLjIyMS0zLjIyLTQuODU3LS4wMjYtMy4wNCAyLjQ4LTQuNDk0IDIuNTk3LTQuNTU5LTEuNDI5LTIuMDktMy42MjMtMi4zMjQtNC4zOS0yLjM3Ni0yLS4xNTYtMy42NzUgMS4wOS00LjYxIDEuMDl6TTE1LjUzIDMuODNjLjg0My0xLjAxMiAxLjQtMi40MjcgMS4yNDUtMy44My0xLjIwNy4wNTItMi42NjIuODA1LTMuNTMyIDEuODE4LS43OC44OTYtMS40NTQgMi4zMzgtMS4yNzMgMy43MTQgMS4zMzguMTA0IDIuNzE1LS42ODggMy41NTktMS43MDEiLz48L3N2Zz4="
        />
        <text
          aria-hidden="true"
          x="325"
          y="150"
          fill="#010101"
          fill-opacity=".3"
          transform="scale(.1)"
          textLength="190"
        >
          iOS
        </text>
        <text
          x="325"
          y="140"
          transform="scale(.1)"
          fill="#fff"
          textLength="190"
        >
          iOS
        </text>
      </g>
    </svg>
  );
};

function BadgeWithVersionSVG({ type, version }: BadgeWithVersionSVGProps) {
  const color = THEME_COLORS[type] || THEME_COLORS.default;

  let labelBadge = null;
  switch (type) {
    case BADGE_TYPES.Android: {
      labelBadge = AndroidBadge();
      break;
    }
    case BADGE_TYPES.iOS: {
      labelBadge = iOSBadge();
      break;
    }
    case BADGE_TYPES.SDK: {
      labelBadge = SDKBadge();
      break;
    }
    default:
      break;
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        wordBreak: 'keep-all',
        whiteSpace: 'nowrap',
      }}
    >
      {labelBadge}
      <span
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          wordBreak: 'keep-all',
          whiteSpace: 'nowrap',
          backgroundColor: color,
          color: '#FFFFFF',
          padding: '2.5px 6px',
          fontSize: '12px',
          textDecoration: 'none',
          borderTopRightRadius: '3px',
          borderBottomRightRadius: '3px',
          height: '20px',
          marginLeft: '-2px',
          zIndex: '2',
          position: 'relative',
        }}
      >
        {version}
      </span>
    </span>
  );
}

export function BadgeWithVersion({
  type,
  version,
  link,
}: BadgeWithVersionProps) {
  if (link) {
    return (
      <Link
        href={link}
        style={{ textDecoration: 'none', verticalAlign: 'text-top' }}
      >
        <BadgeWithVersionSVG type={type} version={version} />
      </Link>
    );
  }
  return <BadgeWithVersionSVG type={type} version={version} />;
}
