class CDUIdentPage {
    static ShowPage(mcdu) {
        let date = mcdu.getNavDataDateRange();
        mcdu.clearDisplay();
        mcdu.setTemplate([
            ["A321-231"],
            ["ENG"],
            ["IAE V2533-A5"+"[color]green"],
            ["ACTIVE DATA BASE"],
            [date + "[color]blue", "AIRAC"],
            ["SECOND DATA BASE"],
            ["←" + date + "[color]blue"],
            [""],
            [""],
            ["CHG CODE"],
            ["[   ][color]blue"],
            ["IDLE/PERF"],
            ["+0.0/+1.9[color]green"],
        ]);
    }
}
//# sourceMappingURL=A320_Neo_CDU_IdentPage.js.map