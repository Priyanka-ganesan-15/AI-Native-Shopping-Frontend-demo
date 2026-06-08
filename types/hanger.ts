export type HangerStatus = "Draft" | "Shared" | "Purchased";

export type Hanger = {
	id: string;
	name: string;
	description?: string;
	pieces: number;
	status: HangerStatus;
};
