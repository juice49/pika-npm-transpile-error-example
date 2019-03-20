import got from 'got';

(async () => {
  const res = await got('https://daringfireball.net');
  console.log(res.body);
})();