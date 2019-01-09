// Google Trends autoComplete
import * as googleTrends from 'google-trends-api';

if (process.argv.length < 3) {
	console.log(`usage: ${process.argv[0].replace(/^.*[\\\/]/, '')} ${process.argv[1].replace(/^.*[\\\/]/, '')} <keyWord>`);
}
else {
	const keyWord = process.argv.slice(2);

	console.log(`keyWord = ${keyWord}`)

	googleTrends.interestOverTime({ keyword: keyWord, geo: 'JP', hl: 'ja' })
		.then((results: string) => {
			const ret = JSON.parse(results);
			// console.log('These results are awesome', results);
			const timelineData = ret.default.timelineData;
			var topTime: string[] = [];
			for (const index in timelineData) {
				const data = timelineData[index];
				// console.log(data);
				if (data.hasData[0] === true) {
					console.log(`  ${data.formattedTime} = ${data.formattedValue}`);
				}
				if (data.formattedValue == 100) {
					topTime.push(data.formattedTime);
				}
			}
			console.log(`Top Time = ${topTime}`);
		})
		.catch((err: string) => {
			console.error('Oh no there was an error', err);
		});
}
