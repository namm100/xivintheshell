import React from "react";
import { controller } from "../Controller/Controller";
import { localize } from "./Localization";
import { Checkbox } from "./Common";

export function TimelineDisplaySettings() {
	return <div>
		<Checkbox
			uniqueName={"showDamageMarks"}
			label={localize({ en: "show damage marks", zh: "显示伤害结算标记" })}
			onChange={(val) => {
				controller.setTimelineOptions({ drawDamageMarks: val });
			}}
		/>
		<Checkbox
			uniqueName={"showHealingMarks"}
			label={localize({ en: "show healing marks" })}
			onChange={(val) => {
				controller.setTimelineOptions({ drawHealingMarks: val });
			}}
		/>
		<Checkbox
			uniqueName={"showMPAndLucidTickMarks"}
			label={localize({ en: "show MP and lucid ticks", zh: "显示跳蓝和跳醒梦" })}
			onChange={(val) => {
				controller.setTimelineOptions({ drawMPTickMarks: val });
			}}
		/>
		<Checkbox
			uniqueName={"showBuffIndicators"}
			label={localize({ en: "show buff indicators", zh: "显示buff标记" })}
			onChange={(val) => {
				controller.setTimelineOptions({ drawBuffIndicators: val });
			}}
		/>
		<Checkbox
			uniqueName={"showAutoTickMarks"}
			label={localize({ en: "show auto tick marks" })}
			onChange={(val) => {
				controller.setTimelineOptions({ drawAutoTickMarks: val });
			}}
		/>
		<Checkbox
			uniqueName={"showAutoDamageMarks"}
			label={localize({ en: "show auto damage marks" })}
			onChange={(val) => {
				controller.setTimelineOptions({ drawAutoDamageMarks: val });
			}}
		/>
	</div>;
}
