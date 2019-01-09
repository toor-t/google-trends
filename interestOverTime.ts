// Google Trends autoComplete
const googleTrends = require('google-trends-api');

if (process.argv.length < 3) {
	console.log(`usage: ${process.argv[0].replace(/^.*[\\\/]/, '')} ${process.argv[1].replace(/^.*[\\\/]/, '')} <keyWord>`);
}
else {
	const keyWord = process.argv[2];

	console.log(`keyWord = ${keyWord}`)

	googleTrends.interestOverTime({ keyword: keyWord, geo: 'JP', hl: 'ja' })
		.then((results: string) => {
			const ret = JSON.parse(results);
			// console.log('These results are awesome', results);
			const timelineData = ret.default.timelineData;
			for (const index in timelineData) {
				const data = timelineData[index];
				// console.log(data);
				if (data.hasData[0] === true) {
					console.log(`  ${data.formattedTime} = ${data.formattedValue}`);
				}
			}
		})
		.catch((err: string) => {
			console.error('Oh no there was an error', err);
		});
}
