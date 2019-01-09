// Google Trends autoComplete
import * as googleTrends from 'google-trends-api';

if (process.argv.length < 3) {
	console.log(`usage: ${process.argv[0].replace(/^.*[\\\/]/, '')} ${process.argv[1].replace(/^.*[\\\/]/, '')} <keyWord>`);
}
else {
	const keyWord = process.argv.slice(2);

	console.log(`keyWord = ${keyWord}`)

	googleTrends.autoComplete({ keyword: keyWord, hl: 'ja' })
		.then((results: string) => {
			const ret = JSON.parse(results);
			console.log('These results are awesome', JSON.stringify(ret, null, '  '));
			// const geoMapData = ret.default.geoMapData;
			// for (const index in geoMapData) {
			// 	const data = geoMapData[index];
			// 	// console.log(data);
			// 	if (data.hasData[0] === true) {
			// 		console.log(`  ${data.geoName} = ${data.formattedValue}`);
			// 	}
			// }
		})
		.catch((err: string) => {
			console.error('Oh no there was an error', err);
		});
}
