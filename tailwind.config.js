const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    presets: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
        },
        spacing: {
            'px': '1px',
            'rpx': '1rpx',
            '0': '0px',
            '0_5': '4rpx',
            '1': '8rpx',
            '1_5': '12rpx',
            '2': '16rpx',
            '2_5': '20rpx',
            '3': '24rpx',
            '3_5': '28rpx',
            '4': '32rpx',
            '5': '40rpx',
            '6': '48rpx',
            '7': '56rpx',
            '8': '64rpx',
            '9': '72rpx',
            '10': '80rpx',
            '12': '96rpx',
            '14': '112rpx',
            '16': '128rpx',
            '20': '160rpx',
            '24': '192rpx',
            '32': '256rpx',
            '40': '320rpx',
            '48': '384rpx',
            '56': '448rpx',
            '64': '512rpx',
            '72': '576rpx',
            '80': '640rpx',
            '100': '800rpx',
            '120': '960rpx',
            '140': '1120rpx',
            '160': '1280rpx',
            '180': '1440rpx',
            '200': '1600rpx',
        },
        animation: {
            none: 'none',
            spin: 'spin 1s linear infinite',
            ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            bounce: 'bounce 1s infinite',
        },
        backgroundColor: (theme) => theme('colors'),
        backgroundImage: {
            none: 'none',
            'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
            'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
            'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
            'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
            'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
            'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
            'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
        },
        backgroundOpacity: (theme) => theme('opacity'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        blur: {},
        brightness: {},
        borderColor: (theme) => ({
            ...theme('colors'),
            DEFAULT: theme('colors.gray.200', 'currentColor'),
        }),
        borderOpacity: (theme) => theme('opacity'),
        borderRadius: {
            none: '0px',
            sm: '4rpx',
            DEFAULT: '8rpx',
            md: '12rpx',
            lg: '16rpx',
            xl: '24rpx',
            '2xl': '32rpx',
            '3xl': '48rpx',
            full: '9999px',
        },
        borderWidth: {
            DEFAULT: '1rpx',
            0: '0rpx',
            2: '2rpx',
            4: '4rpx',
            8: '8rpx',
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        },
        contrast: {},
        container: {},
        content: {
            none: 'none',
        },
        cursor: {},
        divideColor: (theme) => theme('borderColor'),
        divideOpacity: (theme) => theme('borderOpacity'),
        divideWidth: (theme) => theme('borderWidth'),
        dropShadow: {},
        fill: {current: 'currentColor'},
        grayscale: {},
        hueRotate: {},
        invert: {},
        flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            0: '0',
            DEFAULT: '1',
        },
        flexShrink: {
            0: '0',
            DEFAULT: '1',
        },
        fontFamily: {
            sans: [
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
        },
        fontSize: {
            xs: ['24rpx', {lineHeight: '32rpx'}],
            sm: ['28rpx', {lineHeight: '40rpx'}],
            base: ['32rpx', {lineHeight: '48rpx'}],
            lg: ['36rpx', {lineHeight: '56rpx'}],
            xl: ['40rpx', {lineHeight: '56rpx'}],
            '2xl': ['48rpx', {lineHeight: '64rpx'}],
            '3xl': ['60rpx', {lineHeight: '72rpx'}],
            '4xl': ['72rpx', {lineHeight: '80rpx'}],
            '5xl': ['96rpx', {lineHeight: '1'}],
            '6xl': ['120rpx', {lineHeight: '1'}],
            '7xl': ['144rpx', {lineHeight: '1'}],
            '8xl': ['192rpx', {lineHeight: '1'}],
            '9xl': ['256rpx', {lineHeight: '1'}],
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        gap: (theme) => theme('spacing'),
        gradientColorStops: (theme) => theme('colors'),
        gridAutoColumns: {
            auto: 'auto',
            min: 'min-content',
            max: 'max-content',
            fr: 'minmax(0, 1fr)',
        },
        gridAutoRows: {
            auto: 'auto',
            min: 'min-content',
            max: 'max-content',
            fr: 'minmax(0, 1fr)',
        },
        gridColumn: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-7': 'span 7 / span 7',
            'span-8': 'span 8 / span 8',
            'span-9': 'span 9 / span 9',
            'span-10': 'span 10 / span 10',
            'span-11': 'span 11 / span 11',
            'span-12': 'span 12 / span 12',
            'span-full': '1 / -1',
        },
        gridColumnEnd: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
        },
        gridColumnStart: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
        },
        gridRow: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-full': '1 / -1',
        },
        gridRowStart: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
        },
        gridRowEnd: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
        },
        gridTemplateColumns: {
            none: 'none',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))',
        },
        gridTemplateRows: {
            none: 'none',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
        },
        height: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1_2': '50%',
            '1_3': '33.333333%',
            '2_3': '66.666667%',
            '1_4': '25%',
            '2_4': '50%',
            '3_4': '75%',
            '1_5': '20%',
            '2_5': '40%',
            '3_5': '60%',
            '4_5': '80%',
            '1_6': '16.666667%',
            '2_6': '33.333333%',
            '3_6': '50%',
            '4_6': '66.666667%',
            '5_6': '83.333333%',
            full: '100%',
            screen: '100vh',
        }),
        inset: (theme, {negative}) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1_2': '50%',
            '1_3': '33.333333%',
            '2_3': '66.666667%',
            '1_4': '25%',
            '2_4': '50%',
            '3_4': '75%',
            full: '100%',
        }),
        keyframes: {
            spin: {
                to: {
                    transform: 'rotate(360deg)',
                },
            },
            ping: {
                '75%, 100%': {
                    transform: 'scale(2)',
                    opacity: '0',
                },
            },
            pulse: {
                '50%': {
                    opacity: '.5',
                },
            },
            bounce: {
                '0%, 100%': {
                    transform: 'translateY(-25%)',
                    animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
                },
                '50%': {
                    transform: 'none',
                    animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
                },
            },
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
            3: '24rpx',
            4: '32rpx',
            5: '40rpx',
            6: '48rpx',
            7: '56rpx',
            8: '64rpx',
            9: '72rpx',
            10: '80rpx',
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        margin: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
        }),
        maxHeight: (theme) => ({
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        maxWidth: () => ({
            none: 'none',
            0: '0rpx',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
        }),
        minHeight: {
            0: '0px',
            full: '100%',
            screen: '100vh',
        },
        minWidth: {
            0: '0px',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        opacity: {
            0: '0',
            5: '0.05',
            10: '0.1',
            20: '0.2',
            25: '0.25',
            30: '0.3',
            40: '0.4',
            50: '0.5',
            60: '0.6',
            70: '0.7',
            75: '0.75',
            80: '0.8',
            90: '0.9',
            95: '0.95',
            100: '1',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
        },
        outline: {
            none: ['2px solid transparent', '2px'],
            white: ['2px dotted white', '2px'],
            black: ['2px dotted black', '2px'],
        },
        padding: (theme) => theme('spacing'),
        placeholderColor: (theme) => theme('colors'),
        placeholderOpacity: (theme) => theme('opacity'),
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            '-12': '-12deg',
            '-6': '-6deg',
            '-3': '-3deg',
            '-2': '-2deg',
            '-1': '-1deg',
            0: '0deg',
            1: '1deg',
            2: '2deg',
            3: '3deg',
            6: '6deg',
            12: '12deg',
            45: '45deg',
            90: '90deg',
            180: '180deg',
        },
        saturate: {},
        scale: {
            0: '0',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5',
        },
        sepia: {},
        skew: {
            '-12': '-12deg',
            '-6': '-6deg',
            '-3': '-3deg',
            '-2': '-2deg',
            '-1': '-1deg',
            0: '0deg',
            1: '1deg',
            2: '2deg',
            3: '3deg',
            6: '6deg',
            12: '12deg',
        },
        space: (theme) => ({
            ...theme('spacing'),
        }),
        stroke: {
            current: 'currentColor',
        },
        strokeWidth: {
            0: '0',
            1: '1',
            2: '2',
        },
        textColor: (theme) => theme('colors'),
        textOpacity: (theme) => theme('opacity'),
        transformOrigin: {
            center: 'center',
            top: 'top',
            'top-right': 'top right',
            right: 'right',
            'bottom-right': 'bottom right',
            bottom: 'bottom',
            'bottom-left': 'bottom left',
            left: 'left',
            'top-left': 'top left',
        },
        transitionDelay: {
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
        },
        transitionDuration: {
            DEFAULT: '150ms',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
        },
        transitionProperty: {
            none: 'none',
            all: 'all',
            DEFAULT:
                'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
            colors: 'background-color, border-color, color, fill, stroke',
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform',
        },
        transitionTimingFunction: {
            DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        translate: (theme, {negative}) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '1_2': '50%',
            '1_3': '33.333333%',
            '2_3': '66.666667%',
            '1_4': '25%',
            '2_4': '50%',
            '3_4': '75%',
            full: '100%',
            '-1_2': '-50%',
            '-1_3': '-33.333333%',
            '-2_3': '-66.666667%',
            '-1_4': '-25%',
            '-2_4': '-50%',
            '-3_4': '-75%',
            '-full': '-100%',
        }),
        width: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1_2': '50%',
            '1_3': '33.333333%',
            '2_3': '66.666667%',
            '1_4': '25%',
            '2_4': '50%',
            '3_4': '75%',
            '1_5': '20%',
            '2_5': '40%',
            '3_5': '60%',
            '4_5': '80%',
            '1_6': '16.666667%',
            '2_6': '33.333333%',
            '3_6': '50%',
            '4_6': '66.666667%',
            '5_6': '83.333333%',
            '1_12': '8.333333%',
            '2_12': '16.666667%',
            '3_12': '25%',
            '4_12': '33.333333%',
            '5_12': '41.666667%',
            '6_12': '50%',
            '7_12': '58.333333%',
            '8_12': '66.666667%',
            '9_12': '75%',
            '10_12': '83.333333%',
            '11_12': '91.666667%',
            full: '100%',
            screen: '100vw',
            min: 'min-content',
            max: 'max-content',
        }),
        zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
        },
    },
    variantOrder: [
        'first',
        'last',
        'odd',
        'even',
        'visited',
        'checked',
        'empty',
        'read-only',
        'group-hover',
        'group-focus',
        'focus-within',
        'hover',
        'focus',
        'focus-visible',
        'active',
        'disabled',
    ],
    variants: {
        accessibility: [],
        alignContent: [],
        alignItems: [],
        alignSelf: [],
        animation: [],
        appearance: [],
        backdropBlur: [],
        backdropBrightness: [],
        backdropContrast: [],
        backdropFilter: [],
        backdropGrayscale: [],
        backdropHueRotate: [],
        backdropInvert: [],
        backdropOpacity: [],
        backdropSaturate: [],
        backdropSepia: [],
        backgroundAttachment: [],
        backgroundBlendMode: [],
        backgroundClip: [],
        backgroundColor: [],
        backgroundImage: [],
        backgroundOpacity: [],
        backgroundPosition: [],
        backgroundRepeat: [],
        backgroundSize: [],
        backgroundOrigin: [],
        blur: [],
        borderCollapse: [],
        borderColor: [],
        borderOpacity: [],
        borderRadius: [],
        borderStyle: [],
        borderWidth: [],
        boxDecorationBreak: [],
        boxShadow: [],
        boxSizing: [],
        brightness: [],
        clear: [],
        container: [],
        contrast: [],
        cursor: [],
        display: [],
        divideColor: [],
        divideOpacity: [],
        divideStyle: [],
        divideWidth: [],
        dropShadow: [],
        fill: [],
        filter: [],
        flex: [],
        flexDirection: [],
        flexGrow: [],
        flexShrink: [],
        flexWrap: [],
        float: [],
        fontFamily: [],
        fontSize: [],
        fontSmoothing: [],
        fontStyle: [],
        fontVariantNumeric: [],
        fontWeight: [],
        gap: [],
        gradientColorStops: [],
        grayscale: [],
        gridAutoColumns: [],
        gridAutoFlow: [],
        gridAutoRows: [],
        gridColumn: [],
        gridColumnEnd: [],
        gridColumnStart: [],
        gridRow: [],
        gridRowEnd: [],
        gridRowStart: [],
        gridTemplateColumns: [],
        gridTemplateRows: [],
        height: [],
        hueRotate: [],
        inset: [],
        invert: [],
        isolation: [],
        justifyContent: [],
        justifyItems: [],
        justifySelf: [],
        letterSpacing: [],
        lineHeight: [],
        listStylePosition: [],
        listStyleType: [],
        margin: [],
        maxHeight: [],
        maxWidth: [],
        minHeight: [],
        minWidth: [],
        mixBlendMode: [],
        objectFit: [],
        objectPosition: [],
        opacity: [],
        order: [],
        outline: [],
        overflow: [],
        overscrollBehavior: [],
        padding: [],
        placeContent: [],
        placeItems: [],
        placeSelf: [],
        placeholderColor: [],
        placeholderOpacity: [],
        pointerEvents: [],
        position: [],
        resize: [],
        ringColor: [],
        ringOffsetColor: [],
        ringOffsetWidth: [],
        ringOpacity: [],
        ringWidth: [],
        rotate: [],
        saturate: [],
        scale: [],
        sepia: [],
        skew: [],
        space: [],
        stroke: [],
        strokeWidth: [],
        tableLayout: [],
        textAlign: [],
        textColor: [],
        textDecoration: [],
        textOpacity: [],
        textOverflow: [],
        textTransform: [],
        transform: [],
        transformOrigin: [],
        transitionDelay: [],
        transitionDuration: [],
        transitionProperty: [],
        transitionTimingFunction: [],
        translate: [],
        userSelect: [],
        verticalAlign: [],
        visibility: [],
        whitespace: [],
        width: [],
        wordBreak: [],
        zIndex: [],
    },
    plugins: [],
    corePlugins: [
        "visibility",
        "position",
        "inset",
        "isolation",
        "zIndex",
        "order",
        "gridColumn",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRow",
        "gridRowStart",
        "gridRowEnd",
        "float",
        "clear",
        "margin",
        "boxSizing",
        "display",
        "height",
        "maxHeight",
        "minHeight",
        "width",
        "minWidth",
        "maxWidth",
        "flex",
        "flexShrink",
        "flexGrow",
        "tableLayout",
        "borderCollapse",
        "transformOrigin",
        "translate",
        "rotate",
        "skew",
        "scale",
        "transform",
        "animation",
        "resize",
        "listStylePosition",
        "listStyleType",
        "appearance",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridTemplateColumns",
        "gridTemplateRows",
        "flexDirection",
        "flexWrap",
        "placeContent",
        "placeItems",
        "alignContent",
        "alignItems",
        "justifyContent",
        "justifyItems",
        "gap",
        "placeSelf",
        "alignSelf",
        "justifySelf",
        "overflow",
        "textOverflow",
        "whitespace",
        "wordBreak",
        "borderRadius",
        "borderWidth",
        "borderStyle",
        "borderColor",
        "borderOpacity",
        "backgroundColor",
        "backgroundOpacity",
        "backgroundImage",
        "gradientColorStops",
        "backgroundSize",
        "backgroundAttachment",
        "backgroundClip",
        "backgroundPosition",
        "backgroundRepeat",
        "backgroundOrigin",
        "fill",
        "stroke",
        "strokeWidth",
        "objectFit",
        "objectPosition",
        "padding",
        "textAlign",
        "verticalAlign",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "textTransform",
        "fontStyle",
        "fontVariantNumeric",
        "lineHeight",
        "letterSpacing",
        "textColor",
        "textOpacity",
        "textDecoration",
        "fontSmoothing",
        "opacity",
        "boxShadow",
        "outline",
        "transitionProperty",
        "transitionDelay",
        "transitionDuration",
        "transitionTimingFunction",
        "content"
    ]
}
