/**
 * Centralized external links and metadata for LifeMirror Desktop & Ecosystem.
 */
export const APP_LINKS = {
  github: {
    repo: 'https://github.com/PieApps/lifemirror-desktop',
    releases: 'https://github.com/PieApps/lifemirror-desktop/releases/latest',
    allReleases: 'https://github.com/PieApps/lifemirror-desktop/releases',
    issues: 'https://github.com/PieApps/lifemirror-desktop/issues',
  },
  downloads: {
    windowsExe: 'https://github.com/PieApps/lifemirror-desktop/releases/download/v1.3.3/lifemirror-desktop_1.3.3_x64-setup.exe',
    windowsMsi: 'https://github.com/PieApps/lifemirror-desktop/releases/download/v1.3.3/lifemirror-desktop_1.3.3_x64_en-US.msi',
    macDmg: 'https://github.com/PieApps/lifemirror-desktop/releases/download/v1.3.3/lifemirror-desktop_1.3.3_aarch64.dmg',
    macAppTarGz: 'https://github.com/PieApps/lifemirror-desktop/releases/download/v1.3.3/lifemirror-desktop_1.3.3_aarch64.app.tar.gz',
    linuxDeb: 'https://github.com/PieApps/lifemirror-desktop/releases/download/v1.3.3/lifemirror-desktop_1.3.3_amd64.deb',
    linuxAppImage: 'https://github.com/PieApps/lifemirror-desktop/releases/download/v1.3.3/lifemirror-desktop_1.3.3_amd64.AppImage',
  },
  ecosystem: {
    chromeExtension: 'https://chromewebstore.google.com/detail/lifemirror-desktop/pblffjiaheggbamkjaojabdaemkflhmm',
    androidApp: 'https://play.google.com/store/apps/details?id=com.pieapps.lifemirror',
  },
  support: {
    email: 'vrpieapps@gmail.com',
  },
  donations: {
    buyMeACoffee: 'https://buymeacoffee.com/vrpieapps',
    githubSponsors: 'https://github.com/sponsors/vrpieapps',
  },
} as const;
