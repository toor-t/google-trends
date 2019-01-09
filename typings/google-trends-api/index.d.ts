declare module 'google-trends-api' {

	function autoComplete(param: {
		keyword: string | string[],
		hl?: string
	}): Promise<string>;

	function interestByRegion(param: {
		keyword: string | string[],
		startTime?: Date,
		endTime?: Date,
		geo?: string | string[],
		hl?: string,
		timezone?: number,
		category?: number,
		granularTimeResolution?: boolean,
	}): Promise<string>;

	function interestOverTime(param: {
		keyword: string | string[],
		startTime?: Date,
		endTime?: Date,
		geo?: string | string[],
		resolution?: string,
		hl?: string,
		timezone?: number,
		category?: number,
	}): Promise<string>;

	function relatedQueries(param: {
		keyword: string | string[],
		startTime?: Date,
		endTime?: Date,
		geo?: string | string[],
		hl?: string,
		timezone?: number,
		category?: number,
	}): Promise<string>;

	function relatedTopics(param: {
		keyword: string | string[],
		startTime?: Date,
		endTime?: Date,
		geo?: string | string[],
		hl?: string,
		timezone?: number,
		category?: number,
	}): Promise<string>;
}
