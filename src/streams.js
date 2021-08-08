const es = require('event-stream');
const stream = require('stream');

const values = [
  "efetobore",
  "blessing",
  "tari",
  "spiff",
  "pablo",
  "abulu",
  "emu",
  "lucky",
  "jennifer",
  "muhammed",
  "prince",
  "deputy",
  "aisha",
  "goodluck",
  "science",
  "flamengo",
  "charlotte"
];

function useLoop() {
  let text = '';
  console.time('loop');

  for (let i = 0; i < values.length; i++) {
    text += `${values[i]} `;
  }
  console.log('text: '+text);

  console.timeEnd('loop');
}

function useStreams() {
  let text = '';
  const reader = es.readArray(values);

  console.time('streams');

  reader.pipe(
    es.mapSync((item) => {
      text += `${item} `;
      if (item === 'emu') {
        reader.pause();
      }
    })
    .on('pause', () => {
      console.info('Stream paused!');
      console.log('text: '+text);
    })
    .on('error', (err) => {
      console.error(`stream error: ${err}`);
    })
    .on('end', () => {
      console.log('text: '+text);
      console.info('Array item read completion.');
    })
  );

  console.timeEnd('streams');
}

//useLoop();
useStreams();