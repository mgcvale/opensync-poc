
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_API_URL: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const AUDIODRIVER: string;
	export const CHROME_DESKTOP: string;
	export const CLUTTER_BACKEND: string;
	export const CONFIG_SITE: string;
	export const CPU: string;
	export const CSHEDIT: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DEBUGINFOD_URLS: string;
	export const DESKTOP_SESSION: string;
	export const DISPLAY: string;
	export const GDK_BACKEND: string;
	export const G_BROKEN_FILENAMES: string;
	export const G_FILENAME_ENCODING: string;
	export const HISTSIZE: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const HOME: string;
	export const HOST: string;
	export const HOSTNAME: string;
	export const HOSTTYPE: string;
	export const HYPRLAND_CMD: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const JAVA_BINDIR: string;
	export const JAVA_HOME: string;
	export const JDK_HOME: string;
	export const JRE_HOME: string;
	export const LANG: string;
	export const LESS: string;
	export const LESSCLOSE: string;
	export const LESSKEY: string;
	export const LESSOPEN: string;
	export const LESS_ADVANCED_PREPROCESSOR: string;
	export const LOGNAME: string;
	export const LSCOLORS: string;
	export const LS_OPTIONS: string;
	export const MACHTYPE: string;
	export const MAIL: string;
	export const MANPATH: string;
	export const MANPATHISSET: string;
	export const MINICOM: string;
	export const MORE: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const MOZ_GMP_PATH: string;
	export const NO_AT_BRIDGE: string;
	export const OLDPWD: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OSTYPE: string;
	export const PAGER: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const PATH: string;
	export const PATH_TO_FX: string;
	export const PROFILEREAD: string;
	export const PWD: string;
	export const PYTHONSTARTUP: string;
	export const QEMU_AUDIO_DRV: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const QT_QPA_PLATFORM: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const QT_QPA_PLATFORM_THEME: string;
	export const QT_SCALE_FACTOR: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const SDK_HOME: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const USER: string;
	export const VENDOR: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_PID: string;
	export const WAYLAND_DISPLAY: string;
	export const WINDOWMANAGER: string;
	export const WLR_XWAYLAND: string;
	export const XAUTHLOCALHOSTNAME: string;
	export const XDG_BACKEND: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SEAT: string;
	export const XDG_SEAT_PATH: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_ID: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_SESSION_TYPE: string;
	export const XDG_VTNR: string;
	export const XKEYSYMDB: string;
	export const XNLSPATH: string;
	export const ZSH: string;
	export const _: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const ELECTRON_NO_ASAR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_API_URL: string;
		ELECTRON_RUN_AS_NODE: string;
		AUDIODRIVER: string;
		CHROME_DESKTOP: string;
		CLUTTER_BACKEND: string;
		CONFIG_SITE: string;
		CPU: string;
		CSHEDIT: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DEBUGINFOD_URLS: string;
		DESKTOP_SESSION: string;
		DISPLAY: string;
		GDK_BACKEND: string;
		G_BROKEN_FILENAMES: string;
		G_FILENAME_ENCODING: string;
		HISTSIZE: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		HOME: string;
		HOST: string;
		HOSTNAME: string;
		HOSTTYPE: string;
		HYPRLAND_CMD: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		JAVA_BINDIR: string;
		JAVA_HOME: string;
		JDK_HOME: string;
		JRE_HOME: string;
		LANG: string;
		LESS: string;
		LESSCLOSE: string;
		LESSKEY: string;
		LESSOPEN: string;
		LESS_ADVANCED_PREPROCESSOR: string;
		LOGNAME: string;
		LSCOLORS: string;
		LS_OPTIONS: string;
		MACHTYPE: string;
		MAIL: string;
		MANPATH: string;
		MANPATHISSET: string;
		MINICOM: string;
		MORE: string;
		MOZ_ENABLE_WAYLAND: string;
		MOZ_GMP_PATH: string;
		NO_AT_BRIDGE: string;
		OLDPWD: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OSTYPE: string;
		PAGER: string;
		PAM_KWALLET5_LOGIN: string;
		PATH: string;
		PATH_TO_FX: string;
		PROFILEREAD: string;
		PWD: string;
		PYTHONSTARTUP: string;
		QEMU_AUDIO_DRV: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		QT_QPA_PLATFORM: string;
		QT_QPA_PLATFORMTHEME: string;
		QT_QPA_PLATFORM_THEME: string;
		QT_SCALE_FACTOR: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		SDK_HOME: string;
		SHELL: string;
		SHLVL: string;
		USER: string;
		VENDOR: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		VSCODE_CWD: string;
		VSCODE_ESM_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_PID: string;
		WAYLAND_DISPLAY: string;
		WINDOWMANAGER: string;
		WLR_XWAYLAND: string;
		XAUTHLOCALHOSTNAME: string;
		XDG_BACKEND: string;
		XDG_CONFIG_DIRS: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_DATA_DIRS: string;
		XDG_RUNTIME_DIR: string;
		XDG_SEAT: string;
		XDG_SEAT_PATH: string;
		XDG_SESSION_CLASS: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_ID: string;
		XDG_SESSION_PATH: string;
		XDG_SESSION_TYPE: string;
		XDG_VTNR: string;
		XKEYSYMDB: string;
		XNLSPATH: string;
		ZSH: string;
		_: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		ELECTRON_NO_ASAR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
