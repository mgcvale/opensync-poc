
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
	export const SHELL: string;
	export const npm_command: string;
	export const LSCOLORS: string;
	export const USER_ZDOTDIR: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const SDK_HOME: string;
	export const HYPRLAND_CMD: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const XDG_SESSION_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const JDK_HOME: string;
	export const XDG_BACKEND: string;
	export const CLUTTER_BACKEND: string;
	export const MACHTYPE: string;
	export const G_BROKEN_FILENAMES: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const HOSTNAME: string;
	export const HISTSIZE: string;
	export const FROM_HEADER: string;
	export const MINICOM: string;
	export const NODE: string;
	export const JAVA_HOME: string;
	export const AUDIODRIVER: string;
	export const JRE_HOME: string;
	export const CPU: string;
	export const WLR_XWAYLAND: string;
	export const JAVA_BINDIR: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const NO_AT_BRIDGE: string;
	export const npm_config_globalconfig: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const QEMU_AUDIO_DRV: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const MANPATH: string;
	export const npm_config_init_module: string;
	export const PATH_TO_FX: string;
	export const _: string;
	export const LS_OPTIONS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const XKEYSYMDB: string;
	export const VSCODE_INJECTION: string;
	export const XNLSPATH: string;
	export const HOME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const PYTHONSTARTUP: string;
	export const QT_QPA_PLATFORM_THEME: string;
	export const WAYLAND_DISPLAY: string;
	export const OSTYPE: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const LESS_ADVANCED_PREPROCESSOR: string;
	export const INIT_CWD: string;
	export const CHROME_DESKTOP: string;
	export const QT_QPA_PLATFORM: string;
	export const npm_lifecycle_script: string;
	export const MOZ_GMP_PATH: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_npm_version: string;
	export const LESSCLOSE: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ZSH: string;
	export const G_FILENAME_ENCODING: string;
	export const HOST: string;
	export const npm_config_prefix: string;
	export const XAUTHLOCALHOSTNAME: string;
	export const ZDOTDIR: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const MORE: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const CSHEDIT: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const WINDOWMANAGER: string;
	export const PAGER: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const MANPATHISSET: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const npm_config_noproxy: string;
	export const VENDOR: string;
	export const CONFIG_SITE: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const PROFILEREAD: string;
	export const npm_config_global_prefix: string;
	export const MAIL: string;
	export const HOSTTYPE: string;
	export const NODE_VERSION: string;
	export const QT_SCALE_FACTOR: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const LESSKEY: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
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
		SHELL: string;
		npm_command: string;
		LSCOLORS: string;
		USER_ZDOTDIR: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		SDK_HOME: string;
		HYPRLAND_CMD: string;
		XDG_CONFIG_DIRS: string;
		npm_config_cache: string;
		LESS: string;
		XDG_SESSION_PATH: string;
		TERM_PROGRAM_VERSION: string;
		JDK_HOME: string;
		XDG_BACKEND: string;
		CLUTTER_BACKEND: string;
		MACHTYPE: string;
		G_BROKEN_FILENAMES: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		HOSTNAME: string;
		HISTSIZE: string;
		FROM_HEADER: string;
		MINICOM: string;
		NODE: string;
		JAVA_HOME: string;
		AUDIODRIVER: string;
		JRE_HOME: string;
		CPU: string;
		WLR_XWAYLAND: string;
		JAVA_BINDIR: string;
		COLOR: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		NO_AT_BRIDGE: string;
		npm_config_globalconfig: string;
		GPG_TTY: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		QEMU_AUDIO_DRV: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		MANPATH: string;
		npm_config_init_module: string;
		PATH_TO_FX: string;
		_: string;
		LS_OPTIONS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		XKEYSYMDB: string;
		VSCODE_INJECTION: string;
		XNLSPATH: string;
		HOME: string;
		LANG: string;
		LS_COLORS: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		PYTHONSTARTUP: string;
		QT_QPA_PLATFORM_THEME: string;
		WAYLAND_DISPLAY: string;
		OSTYPE: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		LESS_ADVANCED_PREPROCESSOR: string;
		INIT_CWD: string;
		CHROME_DESKTOP: string;
		QT_QPA_PLATFORM: string;
		npm_lifecycle_script: string;
		MOZ_GMP_PATH: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_npm_version: string;
		LESSCLOSE: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		ZSH: string;
		G_FILENAME_ENCODING: string;
		HOST: string;
		npm_config_prefix: string;
		XAUTHLOCALHOSTNAME: string;
		ZDOTDIR: string;
		LESSOPEN: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		PAM_KWALLET5_LOGIN: string;
		MORE: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		CSHEDIT: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		MOZ_ENABLE_WAYLAND: string;
		WINDOWMANAGER: string;
		PAGER: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		MANPATHISSET: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		npm_config_noproxy: string;
		VENDOR: string;
		CONFIG_SITE: string;
		PATH: string;
		npm_config_node_gyp: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		PROFILEREAD: string;
		npm_config_global_prefix: string;
		MAIL: string;
		HOSTTYPE: string;
		NODE_VERSION: string;
		QT_SCALE_FACTOR: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		LESSKEY: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
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
