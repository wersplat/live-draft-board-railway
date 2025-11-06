(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/temp-react-app/src/context/AuthContext/context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthContext",
    ()=>AuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$79$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/@supabase+supabase-js@2.79.0/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$79$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_URL || 'https://qwpxsufrgigpjcxtnery.supabase.co', __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3cHhzdWZyZ2lncGpjeHRuZXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NzI1MjksImV4cCI6MjA2NzQ0ODUyOX0.ujcyEXDgpIJVaNb7IeFZV9Yrl2l41xHq-TdEut-Wxg0');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/context/AuthContext/AuthProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/AuthContext/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Check active sessions and set the user
            const checkSession = {
                "AuthProvider.useEffect.checkSession": async ()=>{
                    try {
                        setLoading(true);
                        const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                        setUser(session?.user ?? null);
                    } catch (error) {
                        console.error('Error checking session:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AuthProvider.useEffect.checkSession"];
            checkSession();
            // Listen for changes in auth state
            const { data: authListener } = __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "AuthProvider.useEffect": async (event, session)=>{
                    setUser(session?.user ?? null);
                    // Redirect to home after successful sign in
                    if (event === 'SIGNED_IN' && pathname === '/login') {
                        router.push('/');
                    }
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>{
                    authListener?.subscription?.unsubscribe();
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        router,
        pathname
    ]);
    const signIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[signIn]": async (email, password)=>{
            try {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                    email,
                    password
                });
                if (error) throw error;
            } catch (error) {
                console.error('Error signing in:', error);
                throw error;
            }
        }
    }["AuthProvider.useCallback[signIn]"], []);
    const signOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[signOut]": async ()=>{
            try {
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                if (error) throw error;
                router.push('/login');
            } catch (error) {
                console.error('Error signing out:', error);
                throw error;
            }
        }
    }["AuthProvider.useCallback[signOut]"], [
        router
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[value]": ()=>({
                user,
                signIn,
                signOut,
                loading,
                supabase: __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"]
            })
    }["AuthProvider.useMemo[value]"], [
        user,
        loading,
        signIn,
        signOut
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"].Provider, {
        value: value,
        children: !loading && children
    }, void 0, false, {
        fileName: "[project]/temp-react-app/src/context/AuthContext/AuthProvider.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "i6dNzSeNGYFsJFlSn4ZhcPjLqxc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AuthProvider;
const __TURBOPACK__default__export__ = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/context/AuthContext/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/AuthContext/context.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useAuth() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"]);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/context/AuthContext.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// This file is a barrel file that re-exports the public API of the AuthContext
// It helps organize imports and prevents circular dependencies
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/AuthContext/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/AuthContext/useAuth.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/context/DraftContext/context.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraftContext",
    ()=>DraftContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const DraftContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/services/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Constants",
    ()=>Constants,
    "LEGENDS_LEAGUE_ID",
    ()=>LEGENDS_LEAGUE_ID,
    "draftPicksApi",
    ()=>draftPicksApi,
    "playersApi",
    ()=>playersApi,
    "subscribeToDraftUpdates",
    ()=>subscribeToDraftUpdates,
    "subscribeToPlayerUpdates",
    ()=>subscribeToPlayerUpdates,
    "teamsApi",
    ()=>teamsApi
]);
// Additional types and API functions for Legends Basketball Association
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/lib/supabase.ts [app-client] (ecmascript)");
const Constants = {
    public: {
        Enums: {
            achievement_category: [
                "Scoring",
                "Assists",
                "Defense",
                "Rebounding",
                "Mixed Stats",
                "Streak & Longevity",
                "Legendary"
            ],
            achievement_event_type: [
                "match_event",
                "player_stat_event"
            ],
            achievement_rarity: [
                "Common",
                "Rare",
                "Epic",
                "Legendary"
            ],
            achievement_scope: [
                "per_game",
                "season",
                "career",
                "streak",
                "event"
            ],
            achievement_tier: [
                "bronze",
                "silver",
                "gold",
                "platinum",
                "common",
                "rare",
                "legendary",
                "epic"
            ],
            achievement_type: [
                "Career Points Milestone",
                "Single Game",
                "Efficiency",
                "Season",
                "Career Milestones",
                "Blocks",
                "Steals",
                "Lockdown",
                "Streak",
                "Longevity",
                "Mixed Stats"
            ],
            app_role: [
                "admin",
                "league_staff",
                "user",
                "editor",
                "analyst",
                "team_staff",
                "player"
            ],
            award_types: [
                "Offensive MVP",
                "Defensive MVP",
                "Rookie of Tournament"
            ],
            console: [
                "Cross Play",
                "Playstation",
                "Xbox"
            ],
            counter_scope: [
                "career",
                "season",
                "rolling10",
                "game"
            ],
            event_tier: [
                "T1",
                "T2",
                "T3",
                "T4",
                "T5"
            ],
            event_type: [
                "League",
                "Tournament",
                "match_event",
                "player_stat_event"
            ],
            game_year: [
                "2K16",
                "2K17",
                "2K18",
                "2K19",
                "2K20",
                "2K21",
                "2K22",
                "2K23",
                "2K24",
                "2K25",
                "2K26"
            ],
            leaderboard_tier: [
                "S",
                "A",
                "B",
                "C",
                "D"
            ],
            leagues: [
                "Unified Pro Am Association",
                "UPA College",
                "WR",
                "MPBA",
                "Rising Stars",
                "Staten Island Basketball Association",
                "Hall Of Fame League",
                "Dunk League",
                "Road to 25K",
                "Association",
                "USA Basketball",
                "HOF EU",
                "UPA EU",
                "Legends Basketball Association"
            ],
            match_report_status: [
                "pending",
                "submitted",
                "processing",
                "verified",
                "disputed"
            ],
            match_snapshot_status: [
                "pending",
                "in_progress",
                "completed",
                "cancelled"
            ],
            player_position: [
                "Point Guard",
                "Shooting Guard",
                "Lock",
                "Power Forward",
                "Center"
            ],
            queue_slot_status: [
                "waiting",
                "matched",
                "left"
            ],
            queue_status: [
                "queued",
                "processing",
                "done",
                "error"
            ],
            roster_source_type: [
                "league",
                "current"
            ],
            salary_tier: [
                "S",
                "A",
                "B",
                "C",
                "D"
            ],
            stage: [
                "Regular Season",
                "Group Play",
                "Round 1",
                "Round 2",
                "Round 3",
                "Round 4",
                "Semi Finals",
                "Finals",
                "Grand Finals",
                "L1",
                "L2",
                "L3",
                "L4",
                "L5",
                "W1",
                "W2",
                "W3",
                "W4",
                "LF",
                "WF",
                "Playoffs",
                "Open"
            ],
            status: [
                "scheduled",
                "in progress",
                "completed",
                "under review",
                "reviewed",
                "approved"
            ],
            team_queue_slot_status: [
                "waiting",
                "pending_lineup",
                "ready",
                "matched",
                "left"
            ],
            tournament_format: [
                "single-elimination",
                "double-elimination",
                "swiss",
                "round-robin"
            ]
        }
    }
};
const LEGENDS_LEAGUE_ID = 'ddf11c10-f58f-44c3-8f27-50cbad047c27';
;
const teamsApi = {
    getAll: async ()=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('teams').select('id, name, logo_url, created_at').order('name');
        if (error) throw error;
        return (data || []).map((team)=>({
                id: team.id,
                name: team.name,
                logo: team.logo_url || null,
                created_at: team.created_at || new Date().toISOString()
            }));
    },
    getById: async (id)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('teams').select('id, name, logo_url, created_at').eq('id', id).single();
        if (error) return null;
        return {
            id: data.id,
            name: data.name,
            logo: data.logo_url || null,
            created_at: data.created_at || new Date().toISOString()
        };
    }
};
// Helper function to get current season ID for Legends Basketball Association
const getCurrentSeasonId = async ()=>{
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('league_seasons').select('id').eq('league_id', LEGENDS_LEAGUE_ID).eq('is_active', true).order('start_date', {
            ascending: false
        }).limit(1);
        if (error) {
            console.warn('Error fetching current season:', error);
            return null;
        }
        if (!data || data.length === 0) {
            console.warn('Could not find current season for Legends Basketball Association');
            return null;
        }
        return data[0].id;
    } catch (err) {
        console.warn('Error fetching current season:', err);
        return null;
    }
};
const playersApi = {
    getAll: async ()=>{
        // Fetch from draft_pool filtered by league_id and status = 'available'
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('draft_pool').select(`
        player_id,
        player:players!draft_pool_player_id_fkey (
          id,
          gamertag,
          position,
          currentTeamName,
          created_at
        )
      `).eq('league_id', LEGENDS_LEAGUE_ID).eq('status', 'available').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((item)=>{
            const player = item.player;
            if (!player) return null;
            return {
                id: player.id,
                name: player.gamertag,
                position: player.position || '',
                team: player.currentTeamName || '',
                available: true,
                created_at: player.created_at || new Date().toISOString()
            };
        }).filter((p)=>p !== null).sort((a, b)=>a.name.localeCompare(b.name));
    },
    getAvailable: async ()=>{
        // Fetch from draft_pool filtered by league_id and status = 'available'
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('draft_pool').select(`
        player_id,
        player:players!draft_pool_player_id_fkey (
          id,
          gamertag,
          position,
          currentTeamName,
          created_at
        )
      `).eq('league_id', LEGENDS_LEAGUE_ID).eq('status', 'available').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((item)=>{
            const player = item.player;
            if (!player) return null;
            return {
                id: player.id,
                name: player.gamertag,
                position: player.position || '',
                team: player.currentTeamName || '',
                available: true,
                created_at: player.created_at || new Date().toISOString()
            };
        }).filter((p)=>p !== null).sort((a, b)=>a.name.localeCompare(b.name));
    },
    draftPlayer: async (playerId, teamId, pickNumber)=>{
        // Get player details first
        const { data: player, error: playerError } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('players').select('id, gamertag, position').eq('id', playerId).single();
        if (playerError || !player) {
            throw new Error('Player not found');
        }
        // Get current season ID
        const seasonId = await getCurrentSeasonId();
        // Create draft pick with league_id and season_id
        const { error: pickError } = await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('draft_picks').insert([
            {
                pick_number: pickNumber,
                team_id: teamId,
                player_id: playerId,
                player_name: player.gamertag,
                player_position: player.position || '',
                league_id: LEGENDS_LEAGUE_ID,
                season_id: seasonId
            }
        ]);
        if (pickError) throw pickError;
    }
};
const draftPicksApi = {
    getAll: async ()=>{
        try {
            // Get current season ID
            const seasonId = await getCurrentSeasonId();
            // Build query with filters for league_id and season_id
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('draft_picks').select('*').eq('league_id', LEGENDS_LEAGUE_ID);
            // Add season_id filter if available
            if (seasonId) {
                query = query.eq('season_id', seasonId);
            }
            // Order by pick_number
            query = query.order('pick_number');
            const { data, error } = await query;
            if (error) {
                // Handle table not existing gracefully
                const errorObj = error;
                if (errorObj?.code === 'PGRST116' || errorObj?.status === 404 || errorObj?.message?.includes('relation') || errorObj?.message?.includes('does not exist')) {
                    console.log('draft_picks table does not exist yet, returning empty array');
                    return [];
                }
                throw error;
            }
            return (data || []).map((pick)=>({
                    id: pick.id,
                    pick_number: pick.pick_number,
                    team_id: pick.team_id,
                    player_id: pick.player_id,
                    player_name: pick.player_name,
                    player_position: pick.player_position || '',
                    league_id: pick.league_id,
                    season_id: pick.season_id,
                    created_at: pick.created_at || new Date().toISOString()
                }));
        } catch (err) {
            // Handle 404 or other errors gracefully
            const error = err;
            if (error?.code === 'PGRST116' || error?.status === 404 || error?.message?.includes('relation') || error?.message?.includes('does not exist')) {
                console.log('draft_picks table does not exist yet, returning empty array');
                return [];
            }
            console.warn('Error fetching draft picks:', err);
            return [];
        }
    },
    getByTeam: async (teamId)=>{
        try {
            // Get current season ID
            const seasonId = await getCurrentSeasonId();
            // Build query with filters for league_id and season_id
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('draft_picks').select('*').eq('team_id', teamId).eq('league_id', LEGENDS_LEAGUE_ID);
            // Add season_id filter if available
            if (seasonId) {
                query = query.eq('season_id', seasonId);
            }
            // Order by pick_number
            query = query.order('pick_number');
            const { data, error } = await query;
            if (error) {
                const errorObj = error;
                if (errorObj?.code === 'PGRST116' || errorObj?.status === 404 || errorObj?.message?.includes('relation') || errorObj?.message?.includes('does not exist')) {
                    return [];
                }
                throw error;
            }
            return (data || []).map((pick)=>({
                    id: pick.id,
                    pick_number: pick.pick_number,
                    team_id: pick.team_id,
                    player_id: pick.player_id,
                    player_name: pick.player_name,
                    player_position: pick.player_position || '',
                    league_id: pick.league_id,
                    season_id: pick.season_id,
                    created_at: pick.created_at || new Date().toISOString()
                }));
        } catch (err) {
            const error = err;
            if (error?.code === 'PGRST116' || error?.status === 404 || error?.message?.includes('relation') || error?.message?.includes('does not exist')) {
                return [];
            }
            console.warn('Error fetching draft picks by team:', err);
            return [];
        }
    },
    resetDraft: async ()=>{
        try {
            // Get current season ID
            const seasonId = await getCurrentSeasonId();
            // Build delete query with filters for league_id and season_id
            let deleteQuery = __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('draft_picks').delete().eq('league_id', LEGENDS_LEAGUE_ID);
            // Filter by season_id if available
            if (seasonId) {
                deleteQuery = deleteQuery.eq('season_id', seasonId);
            }
            const { error: picksError } = await deleteQuery;
            if (picksError) {
                const error = picksError;
                if (error.code === 'PGRST116' || error.status === 404 || error.message?.includes('relation') || error.message?.includes('does not exist')) {
                    console.log('draft_picks table does not exist, nothing to reset');
                    return;
                }
                throw picksError;
            }
        } catch (err) {
            // If table doesn't exist, that's fine
            const error = err;
            if (error?.code === 'PGRST116' || error?.status === 404 || error?.message?.includes('relation') || error?.message?.includes('does not exist')) {
                console.log('draft_picks table does not exist, nothing to reset');
                return;
            }
            console.warn('Error resetting draft', err);
        }
    }
};
const subscribeToDraftUpdates = (callback)=>{
    const subscription = __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('draft-updates').on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'draft_picks'
    }, ()=>{
        callback();
    }).subscribe();
    return ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
    };
};
const subscribeToPlayerUpdates = (callback)=>{
    const subscription = __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('player-updates').on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'players'
    }, ()=>{
        callback();
    }).subscribe();
    return ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/hooks/useToast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$react$2d$hot$2d$toast$40$2$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/react-hot-toast@2.6.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useToast() {
    _s();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToast.useCallback[toast]": (message, type = 'info')=>{
            switch(type){
                case 'success':
                    __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$react$2d$hot$2d$toast$40$2$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(message);
                    break;
                case 'error':
                    __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$react$2d$hot$2d$toast$40$2$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message);
                    break;
                case 'loading':
                    __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$react$2d$hot$2d$toast$40$2$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(message);
                    break;
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$react$2d$hot$2d$toast$40$2$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(message);
            }
        }
    }["useToast.useCallback[toast]"], []);
    return {
        toast
    };
}
_s(useToast, "craXIlY6wVSU6zp7Bs8bwpVmffA=");
const __TURBOPACK__default__export__ = useToast;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/context/DraftContext/useDraft.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDraft",
    ()=>useDraft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/@tanstack+react-query@5.90.7_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/@tanstack+react-query@5.90.7_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/@tanstack+react-query@5.90.7_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/services/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/hooks/useToast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const DRAFT_DURATION = 60; // 60 seconds per pick
const useDraft = ()=>{
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // State for draft control
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DRAFT_DURATION);
    const [currentPick, setCurrentPick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Fetch teams, players, and draft picks
    const { data: teams = [], isLoading: isLoadingTeams } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'teams'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamsApi"].getAll
    });
    const { data: players = [], isLoading: isLoadingPlayers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'players'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playersApi"].getAll
    });
    const { data: draftPicks = [], isLoading: isLoadingDraftPicks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'draftPicks'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["draftPicksApi"].getAll,
        retry: false,
        refetchOnWindowFocus: false
    });
    // Skip the current pick
    const skipPick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDraft.useCallback[skipPick]": ()=>{
            setCurrentPick({
                "useDraft.useCallback[skipPick]": (prev)=>prev + 1
            }["useDraft.useCallback[skipPick]"]);
            setTimeLeft(DRAFT_DURATION);
            toast('Pick skipped', 'info');
        }
    }["useDraft.useCallback[skipPick]"], [
        toast
    ]);
    // Timer effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDraft.useEffect": ()=>{
            if (isPaused || isLoadingDraftPicks) return;
            const timer = setInterval({
                "useDraft.useEffect.timer": ()=>{
                    setTimeLeft({
                        "useDraft.useEffect.timer": (prev)=>{
                            if (prev <= 1) {
                                clearInterval(timer);
                                // Auto-skip if time runs out
                                skipPick();
                                return DRAFT_DURATION;
                            }
                            return prev - 1;
                        }
                    }["useDraft.useEffect.timer"]);
                }
            }["useDraft.useEffect.timer"], 1000);
            return ({
                "useDraft.useEffect": ()=>clearInterval(timer)
            })["useDraft.useEffect"];
        }
    }["useDraft.useEffect"], [
        isPaused,
        isLoadingDraftPicks,
        skipPick
    ]);
    // Mutation for selecting a player
    const selectPlayerMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDraft.useMutation[selectPlayerMutation]": async (playerId)=>{
                const currentTeam = teams[(currentPick - 1) % teams.length];
                if (!currentTeam) throw new Error('No team found for current pick');
                await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playersApi"].draftPlayer(playerId, currentTeam.id, currentPick);
                // Invalidate queries to refetch data
                await Promise.all([
                    queryClient.invalidateQueries({
                        queryKey: [
                            'players'
                        ]
                    }),
                    queryClient.invalidateQueries({
                        queryKey: [
                            'draftPicks'
                        ]
                    })
                ]);
                // Move to next pick
                setCurrentPick({
                    "useDraft.useMutation[selectPlayerMutation]": (prev)=>prev + 1
                }["useDraft.useMutation[selectPlayerMutation]"]);
                setTimeLeft(DRAFT_DURATION);
            }
        }["useDraft.useMutation[selectPlayerMutation]"],
        onError: {
            "useDraft.useMutation[selectPlayerMutation]": (error)=>{
                console.error('Error selecting player:', error);
                toast('Failed to select player', 'error');
            }
        }["useDraft.useMutation[selectPlayerMutation]"]
    });
    // Toggle pause state
    const togglePause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDraft.useCallback[togglePause]": ()=>{
            setIsPaused({
                "useDraft.useCallback[togglePause]": (prev)=>!prev
            }["useDraft.useCallback[togglePause]"]);
            toast(isPaused ? 'Draft resumed' : 'Draft paused', 'info');
        }
    }["useDraft.useCallback[togglePause]"], [
        isPaused,
        toast
    ]);
    // Reset the draft
    const resetDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDraft.useCallback[resetDraft]": async ()=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["draftPicksApi"].resetDraft();
                await Promise.all([
                    queryClient.invalidateQueries({
                        queryKey: [
                            'players'
                        ]
                    }),
                    queryClient.invalidateQueries({
                        queryKey: [
                            'draftPicks'
                        ]
                    })
                ]);
                setCurrentPick(1);
                setTimeLeft(DRAFT_DURATION);
                setIsPaused(false);
                toast('Draft reset successfully', 'success');
            } catch (error) {
                console.error('Error resetting draft:', error);
                toast('Failed to reset draft', 'error');
            }
        }
    }["useDraft.useCallback[resetDraft]"], [
        queryClient,
        toast
    ]);
    return {
        teams,
        players: players.filter((p)=>p.available),
        draftPicks,
        currentPick,
        isPaused,
        timeLeft,
        isLoading: isLoadingTeams || isLoadingPlayers || isLoadingDraftPicks,
        selectPlayer: selectPlayerMutation.mutateAsync,
        skipPick,
        togglePause,
        resetDraft
    };
};
_s(useDraft, "I0Ovcw6xTr/7KIKhLfkcIcNhWaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$hooks$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/context/DraftContext/DraftProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraftProvider",
    ()=>DraftProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/DraftContext/context.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$useDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/DraftContext/useDraft.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DraftProvider({ children }) {
    _s();
    const draft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$useDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"])();
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DraftProvider.useMemo[contextValue]": ()=>({
                ...draft
            })
    }["DraftProvider.useMemo[contextValue]"], [
        draft
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DraftContext"].Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/temp-react-app/src/context/DraftContext/DraftProvider.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(DraftProvider, "PeEbXU1RXaMYt75aA8dEkIbZ11A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$useDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"]
    ];
});
_c = DraftProvider;
const __TURBOPACK__default__export__ = DraftProvider;
var _c;
__turbopack_context__.k.register(_c, "DraftProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/context/DraftContext/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/DraftContext/context.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$DraftProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/DraftContext/DraftProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$useDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/DraftContext/useDraft.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/temp-react-app/src/context/DraftContext.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// This file is maintained for backward compatibility
// New code should import directly from './DraftContext' (the directory)
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/DraftContext/index.ts [app-client] (ecmascript) <locals>");
;
// Create and export a default object for backward compatibility
const DraftContext = {
    Provider: (await __turbopack_context__.A("[project]/temp-react-app/src/context/DraftContext/index.ts [app-client] (ecmascript, async loader)")).DraftProvider,
    useDraft: (await __turbopack_context__.A("[project]/temp-react-app/src/context/DraftContext/index.ts [app-client] (ecmascript, async loader)")).useDraft
};
const __TURBOPACK__default__export__ = DraftContext;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/temp-react-app/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$7$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/@tanstack+query-core@5.90.7/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/@tanstack+react-query@5.90.7_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$react$2d$hot$2d$toast$40$2$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/react-hot-toast@2.6.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/AuthContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/AuthContext/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/DraftContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$DraftProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/DraftContext/DraftProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Providers({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Providers.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$7$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: 1,
                        staleTime: 5 * 60 * 1000
                    }
                }
            })
    }["Providers.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$DraftContext$2f$DraftProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DraftProvider"], {
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$react$2d$hot$2d$toast$40$2$2e$6$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                        position: "bottom-right",
                        toastOptions: {
                            duration: 4000,
                            style: {
                                background: '#363636',
                                color: '#fff'
                            },
                            success: {
                                duration: 3000,
                                iconTheme: {
                                    primary: '#10B981',
                                    secondary: 'white'
                                }
                            },
                            error: {
                                iconTheme: {
                                    primary: '#EF4444',
                                    secondary: 'white'
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/temp-react-app/app/providers.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/temp-react-app/app/providers.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/temp-react-app/app/providers.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/temp-react-app/app/providers.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Providers, "hh+ggXgorBDfbDg5Tlw06op6jgI=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/temp-react-app/src/components/Layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/AuthContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/src/context/AuthContext/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/temp-react-app/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Layout({ children }) {
    _s();
    const { user, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            path: '/',
            label: 'Home'
        },
        {
            path: '/about',
            label: 'About'
        },
        {
            path: '/rankings',
            label: 'Player Rankings'
        },
        {
            path: '/matches',
            label: 'Recent Matches'
        },
        {
            path: '/standings',
            label: 'Standings'
        },
        {
            path: '/statistics',
            label: 'Statistics'
        },
        {
            path: '/media',
            label: 'Media'
        },
        {
            path: '/draft-pool',
            label: 'Draft Pool'
        },
        {
            path: '/draft',
            label: 'Live Draft'
        }
    ];
    const isActive = (path)=>{
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-white dark:bg-legends-blue-900 transition-colors duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white/95 dark:bg-legends-blue-900/95 backdrop-blur-md border-b border-gray-200 dark:border-legends-blue-800 sticky top-0 z-50 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2",
                                    "aria-label": "Legends Basketball Association Home",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold bg-gradient-to-r from-legends-purple-600 via-legends-red-600 to-legends-blue-600 dark:from-legends-purple-400 dark:via-legends-red-400 dark:to-legends-blue-400 bg-clip-text text-transparent",
                                        children: "Legends Basketball Association"
                                    }, void 0, false, {
                                        fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden lg:flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "flex items-center gap-4 text-sm",
                                            role: "list",
                                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    role: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.path,
                                                        className: `relative px-2 py-1 transition focus:outline-none focus:ring-2 focus:ring-legends-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-legends-blue-900 rounded ${isActive(item.path) ? 'text-legends-purple-600 dark:text-legends-purple-400 font-semibold' : 'text-gray-700 dark:text-neutral-200 hover:text-legends-purple-600 dark:hover:text-legends-purple-400'}`,
                                                        "aria-current": isActive(item.path) ? 'page' : undefined,
                                                        children: [
                                                            item.label,
                                                            isActive(item.path) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-legends-purple-400",
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, this)
                                                }, item.path, false, {
                                                    fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 ml-4 pl-4 border-l border-gray-200 dark:border-legends-blue-800",
                                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 dark:text-neutral-200",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>signOut(),
                                                        className: "px-3 py-1 text-sm text-legends-red-600 dark:text-legends-red-400 hover:text-legends-red-800 dark:hover:text-legends-red-300 transition-colors",
                                                        children: "Sign Out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                className: "px-3 py-1 text-sm text-legends-purple-600 dark:text-legends-purple-400 hover:text-legends-purple-800 dark:hover:text-legends-purple-300 transition-colors",
                                                children: "Sign In"
                                            }, void 0, false, {
                                                fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden flex items-center gap-2",
                                    children: [
                                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700 dark:text-neutral-200 mr-2",
                                            children: user.email
                                        }, void 0, false, {
                                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "px-3 py-1 text-sm text-legends-purple-600 dark:text-legends-purple-400 mr-2",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            id: "mobile-menu-button",
                                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                            className: "text-gray-700 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-legends-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-legends-blue-900 rounded p-1",
                                            "aria-label": "Toggle menu",
                                            "aria-expanded": mobileMenuOpen,
                                            "aria-controls": "mobile-menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "mobile-menu",
                            className: "lg:hidden mt-4 pb-2",
                            role: "menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                role: "list",
                                children: [
                                    navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            role: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.path,
                                                onClick: ()=>setMobileMenuOpen(false),
                                                "aria-label": `Navigate to ${item.label} page`,
                                                className: `block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-legends-blue-800 focus:outline-none focus:ring-2 focus:ring-legends-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-legends-blue-900 ${isActive(item.path) ? 'bg-gray-100 dark:bg-legends-blue-800 text-legends-purple-600 dark:text-legends-purple-400' : 'text-gray-700 dark:text-neutral-200'}`,
                                                "aria-current": isActive(item.path) ? 'page' : undefined,
                                                role: "menuitem",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this)
                                        }, item.path, false, {
                                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)),
                                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        role: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                signOut();
                                                setMobileMenuOpen(false);
                                            },
                                            className: "block w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-legends-blue-800 text-legends-red-600 dark:text-legends-red-400",
                                            role: "menuitem",
                                            children: "Sign Out"
                                        }, void 0, false, {
                                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow bg-white dark:bg-legends-blue-900 transition-colors duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-white dark:bg-legends-blue-900 border-t border-gray-200 dark:border-legends-blue-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-gray-500 dark:text-neutral-400",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Legends Basketball Association. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/temp-react-app/src/components/Layout.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/temp-react-app/src/components/Layout.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Layout, "LmAW3LkzKSj1vcTqkkGpKbTsibU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$src$2f$context$2f$AuthContext$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$temp$2d$react$2d$app$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=temp-react-app_91661003._.js.map