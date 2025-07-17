export const GridLines = () => {
    return (
        <>
            {/* Grid background */}
            <div
                className="
                      absolute inset-0 -z-20 h-full w-full
                      bg-white dark:bg-slate-950
                      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
                      dark:bg-[linear-gradient(to_right,#2929292e_1px,transparent_1px),linear-gradient(to_bottom,#2929292e_1px,transparent_1px)]
                      bg-[size:14px_14px]
                    "
            />

            {/* Radial gradient overlay */}
            <div
                className="
                      absolute inset-0 -z-10
                      pointer-events-none
                      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_40%,transparent_80%)]
                      dark:bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.9)_40%,transparent_60%)]
                    "
            />
        </>
    );
};
