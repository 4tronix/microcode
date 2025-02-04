// auto-generated, run 'node scripts/lochex.mjs' to refresh
namespace microcode {
    export const lang = "en"
    export const font = image.font8
    export function resolveTooltip(id: string) {
        let res: string = ""
        if (!id) return id
        else if (id === "tagline") res = "for micro:bit V2";
        else if (id === "sensors") res = "when...";
        else if (id === "actuators") res = "do...";
        else if (id === "when") res = "when";
        else if (id === "do") res = "do";
        else if (id === "connect") res = "connect";
        else if (id === "S1") res = "page start";
        else if (id === "S2") res = "press";
        else if (id === "S2B") res = "release";
        else if (id === "S3") res = "move";
        else if (id === "S4") res = "timer";
        else if (id === "S5") res = "light";
        else if (id === "S6") res = "temperature";
        else if (id === "S7") res = "radio receive";
        else if (id === "S8") res = "hear";
        else if (id === "S9A") res = "variable X changed";
        else if (id === "S9B") res = "variable Y changed";
        else if (id === "S9C") res = "variable Z changed";
        else if (id === "S10") res = "magnet";
        else if (id === "S11") res = "slider";
        else if (id === "S12") res = "dial";
        else if (id === "rule") res = "rule";
        else if (id === "add_rule") res = "add rule";
        else if (id === "delete_rule") res = "delete rule";
        else if (id === "arith_equals") res = "equals";
        else if (id === "arith_plus") res = "plus";
        else if (id === "disk") res = "save";
        else if (id === "load") res = "load";
        else if (id === "F0") res = "touch pin 0";
        else if (id === "F1") res = "touch pin 1";
        else if (id === "F2") res = "touch pin 2";
        else if (id === "F3") res = "button A";
        else if (id === "F4") res = "button B";
        else if (id === "F5") res = "key 1";
        else if (id === "F6") res = "key 2";
        else if (id === "F7") res = "logo";
        else if (id === "F8") res = "1";
        else if (id === "F9") res = "2";
        else if (id === "F10") res = "3";
        else if (id === "F11") res = "4";
        else if (id === "F12") res = "5";
        else if (id === "F13") res = "1/4 second";
        else if (id === "F14") res = "1 second";
        else if (id === "F18") res = "1 random second";
        else if (id === "F19") res = "5 seconds";
        else if (id === "F15") res = "loud";
        else if (id === "F16") res = "quiet";
        else if (id === "F17_shake") res = "shake";
        else if (id === "F17_tilt_up") res = "tilt up";
        else if (id === "F17_tilt_down") res = "tilt down";
        else if (id === "F17_tilt_left") res = "tilt left";
        else if (id === "F17_tilt_right") res = "tilt right";
        else if (id === "F20A") res = "variable X";
        else if (id === "F20B") res = "variable Y";
        else if (id === "F20C") res = "variable Z";
        else if (id === "F21L") res = "turn left";
        else if (id === "F21R") res = "turn right";
        else if (id === "F22U") res = "warmer";
        else if (id === "F22D") res = "colder";
        else if (id === "C0") res = "edit";
        else if (id === "C1") res = "samples";
        else if (id === "A1") res = "switch page";
        else if (id === "A2") res = "play sound";
        else if (id === "A3") res = "microphone";
        else if (id === "A4") res = "music";
        else if (id === "A5") res = "show image";
        else if (id === "A6") res = "radio send";
        else if (id === "A6A") res = "radio set group";
        else if (id === "A7") res = "random number";
        else if (id === "A10") res = "show number";
        else if (id === "M1") res = "page 1";
        else if (id === "M2") res = "page 2";
        else if (id === "M3") res = "page 3";
        else if (id === "M4") res = "page 4";
        else if (id === "M5") res = "page 5";
        else if (id === "M6") res = "1";
        else if (id === "M7") res = "2";
        else if (id === "M8") res = "3";
        else if (id === "M9") res = "4";
        else if (id === "M10") res = "5";
        else if (id === "M15") res = "LED image";
        else if (id === "M18") res = "music";
        else if (id === "M19giggle") res = "giggle";
        else if (id === "M19happy") res = "happy";
        else if (id === "M19hello") res = "hello";
        else if (id === "M19mysterious") res = "mysterious";
        else if (id === "M19sad") res = "sad";
        else if (id === "M19slide") res = "slide";
        else if (id === "M19soaring") res = "soaring";
        else if (id === "M19spring") res = "spring";
        else if (id === "M19twinkle") res = "twinkle";
        else if (id === "M19yawn") res = "yawn";
        else if (id === "M20A") res = "variable X";
        else if (id === "M20B") res = "variable Y";
        else if (id === "M20C") res = "variable Z";
        else if (id === "M21") res = "radio value";
        else if (id === "M22") res = "dice";
        else if (id === "M23") res = "repeat";
        else if (id === "M24") res = "melody";
        else if (id === "M25") res = "temperature";
        else if (id === "A8") res = "LED";
        else if (id === "A9A") res = "set variable X";
        else if (id === "A9B") res = "set variable Y";
        else if (id === "A9C") res = "set variable Z";
        else if (id === "N1") res = "new program";
        else if (id === "N2") res = "flashing heart";
        else if (id === "N3") res = "smiley buttons";
        else if (id === "N4") res = "pet hamster";
        else if (id === "N5") res = "chuck a duck";
        else if (id === "N6") res = "reaction time";
        else if (id === "N7") res = "hot potato";
        else if (id === "N8") res = "rock paper scissors";
        else if (id === "N9") res = "head or tail";
        else if (id === "N10") res = "clap lights";
        else if (id === "N11") res = "firefly";
        else if (id === "N12") res = "railroad crossing";
        else if (id === "N13") res = "7 seconds clap";
        else if (id === "N14") res = "counter";
        else if (id === "A20_1") res = "red";
        else if (id === "A20_2") res = "green";
        else if (id === "A20_3") res = "blue";
        else if (id === "A20_4") res = "purple";
        else if (id === "A20_5") res = "yellow";
        else if (id === "A20_6") res = "black";
        else if (id === "A20_rainbow") res = "rainbow";
        else if (id === "A20_sparkle") res = "sparkle";
        else if (id === "A21_") res = "servo set angle";
        else if (id === "SR_LED") res = "LED {x} {y} {state}";
        else if (id === "SR_NOTE") res = "note {index} {state}";
        else if (id === "SR_ON") res = "on";
        else if (id === "SR_OFF") res = "off";
        else if (id === "CAR") res = "robot";
        else if (id === "CAR1") res = "forward";
        else if (id === "CAR2") res = "reverse";
        else if (id === "CAR3") res = "turn left";
        else if (id === "CAR4") res = "turn right";
        else if (id === "CAR5") res = "stop";
        else if (id === "CAR6") res = "fast forward";
        else if (id === "CAR7") res = "spin left";
        else if (id === "CAR8") res = "spin right";
        else if (id === "CAR9") res = "LED red";
        else if (id === "CAR10") res = "LED green";
        else if (id === "CAR11") res = "LED blue";
        else if (id === "S13") res = "wall";
        else if (id === "S14") res = "line";
        else if (id === "F23L") res = "left";
        else if (id === "F23R") res = "right";
        else if (id === "F23B") res = "both";
        else if (id === "F23N") res = "none";
        else if (id === "F23NL") res = "none from left";
        else if (id === "F23NR") res = "none from right";        
        return res
    }
}