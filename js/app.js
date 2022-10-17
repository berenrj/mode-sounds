const app = Vue.createApp({
    data() {
        return {
            rootNote: '',
            allNotes: ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
            fileNoteList: ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
            soundNames: ['0a','0a-','0b','0c','0c-','0d','0d-','0e','0f','0f-','0g','0g-','1a','1a-','1b','1c','1c-','1d','1d-','1e','1f','1f-','1g','1g-','2a','2a-','2b','2c','2c-','2d','2d-','2e','2f','2f-','2g','2g-'],
            sortedSoundNames: [],
            ints: {
                major: [0,2,4,5,7,9,11], // 't','t','s','t','t','t'
                minor: [0,2,3,5,7,8,10], // 't','s','t','t','s','t'
                harMin: [0,2,3,5,7,8,11], // 't','s','t','t','s','ts'
                melMin: [0,2,3,5,7,9,11], // 't','s','t','t','t','t'
                harMaj: [0,2,4,5,7,8,11], // 't','t','s','t','s','ts'
                dblHarMaj: [0,1,4,5,7,8,11] // 's','ts','s','t','s','ts'
            },
            modes: [
                {
                    modeName: 'MAJOR', 
                    degNums: ['1','2','3','4','5','6','7'], 
                    numerals: ['I','ii','iii','IV','V','vi','vii*'], 
                    notes: ['','','','','','',''],
                    fileInts: [0,2,4,5,7,9,11,12,14,16,17,19,21,23,24,26,28,29,31,33,35],
                    noteFiles: ['','','','','','','','','','','','','','','','','','','','',''],
                    triads: ['Maj','min','min','Maj','Maj','min','dim'], 
                    exts: ['Maj7','min7','min7','Maj7','Dom7','min7','m7b5'] ,
                    tNotes: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    tNoteFiles: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    eNotes: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']],
                    eNoteFiles: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']]
                },
                {
                    modeName: 'NATURAL MINOR', 
                    degNums: ['1','2','b3','4','5','b6','b7'], 
                    numerals: ['i','ii*','III','iv','v','VI','VII'], 
                    notes: ['','','','','','',''],
                    fileInts: [0,2,3,5,7,8,10,12,14,15,17,19,20,22,24,26,27,29,31,32,34],
                    noteFiles: ['','','','','','','','','','','','','','','','','','','','',''],
                    triads: ['min','dim','Maj','min','min','Maj','Maj'], 
                    exts: ['min7','m7b5','Maj7','min7','min7','Maj7','Dom7'],
                    tNotes: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    tNoteFiles: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    eNotes: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']],
                    eNoteFiles: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']]
                },
                {
                    modeName: 'HARMONIC MINOR', 
                    degNums: ['1','2','b3','4','5','b6','7'], 
                    numerals: ['i','ii*','III+','iv','V','VI','vii*'], 
                    notes: ['','','','','','',''],
                    fileInts: [0,2,3,5,7,8,11,12,14,15,17,19,20,23,24,26,27,29,31,32,35],
                    noteFiles: ['','','','','','','','','','','','','','','','','','','','',''],
                    triads: ['min','dim','Aug','min','Maj','Maj','dim'], 
                    exts: ['minMaj7','m7b5','AugMaj7','min7','Dom7','Maj7','dim7'] ,
                    tNotes: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    tNoteFiles: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    eNotes: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']],
                    eNoteFiles: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']]
                },
                {
                    modeName: 'MELODIC MINOR', 
                    degNums: ['1','2','b3','4','5','6','7'], 
                    numerals: ['i','ii','III+','IV','V','vi*','vii*'], 
                    notes: ['','','','','','',''],
                    fileInts: [0,2,3,5,7,9,11,12,14,15,17,19,21,23,24,26,27,29,31,33,35],
                    noteFiles: ['','','','','','','','','','','','','','','','','','','','',''], 
                    triads: ['min','min','Aug','Maj','Maj','dim','dim'], 
                    exts: ['minMaj7','min7','AugMaj7','Dom7','Dom7','m7b5','m7b5'],
                    tNotes: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    tNoteFiles: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    eNotes: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']],
                    eNoteFiles: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']]
                },
                {
                    modeName: 'HARMONIC MAJOR', 
                    degNums: ['1','2','3','4','5','b6','7'], 
                    numerals: ['I','ii*','iii','iv','V','VI+','vii*'], 
                    notes: ['','','','','','',''],
                    fileInts: [0,2,4,5,7,8,11,12,14,16,17,19,20,23,24,26,28,29,31,32,35],
                    noteFiles: ['','','','','','','','','','','','','','','','','','','','',''], 
                    triads: ['Maj','dim','min','min','Maj','Aug','dim'], 
                    exts: ['Maj7','m7b5','min7','minMaj7','Dom7','AugMaj7','dim7'],
                    tNotes: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    tNoteFiles: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    eNotes: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']],
                    eNoteFiles: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']]
                },
                {
                    modeName: 'DOUBLE HARMONIC MAJOR', 
                    degNums: ['1','b2','3','4','5','b6','7'], 
                    numerals: ['I','II','iii','iv','Vb5','VI+','vii*'], 
                    notes: ['','','','','','',''],
                    fileInts: [0,1,4,5,7,8,11,12,13,16,17,19,20,23,24,25,28,29,31,32,35],
                    noteFiles: ['','','','','','','','','','','','','','','','','','','','',''], 
                    triads: ['Maj','Maj','min','min','Majb5','Aug','dim'], 
                    exts: ['Maj7','Maj7','minbb7','minMaj7','Dom7b5','AugMaj7','Dom4/2'],
                    tNotes: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    tNoteFiles: [['','',''],['','',''],['','',''],['','',''],['','',''],['','',''],['','','']],
                    eNotes: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']],
                    eNoteFiles: [['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','',''],['','','','']]
                },
            ]
        }
    },
    methods: {
        getRootNote() {
            var el = document.getElementById("inputGroupSelect01");
            var val = el[el.selectedIndex].value;
            this.rootNote = val;
            // console.log("getRootNote, "+this.rootNote);
            this.sortNotes(this.rootNote);
            
        },
        sortNotes(note) {
            var newArr = [...this.allNotes];
            var rootIndex = newArr.indexOf(note);
            for (var i=0; i<rootIndex; i++) {
                newArr.push(newArr.shift());
            }
            // console.log("sortNotes, "+newArr);
            this.setModeNotes(newArr);
        },
        setModeNotes(sorted) {
            // set the notes property of each modes object using the ints data (for display strings)
            var major = this.ints.major;
            var minor = this.ints.minor;
            var harMin = this.ints.harMin;
            var melMin = this.ints.melMin;
            var harMaj = this.ints.harMaj;
            var dblHarMaj = this.ints.dblHarMaj;
            for (var i=0; i<7; i++) {
                // major
                this.modes[0].notes[i] = sorted[major[i]];
                // minor
                this.modes[1].notes[i] = sorted[minor[i]];
                // harMin
                this.modes[2].notes[i] = sorted[harMin[i]];
                // melMin
                this.modes[3].notes[i] = sorted[melMin[i]];
                // harMaj
                this.modes[4].notes[i] = sorted[harMaj[i]];
                // dblHarMaj
                this.modes[5].notes[i] = sorted[dblHarMaj[i]];
            };

            // console.log("setModeNotes, major: "+this.modes[0].notes);
            // console.log("setModeNotes, minor: "+this.modes[1].notes);
            // console.log("setModeNotes, harMin: "+this.modes[2].notes);
            // console.log("setModeNotes, melMin: "+this.modes[3].notes);
            // console.log("setModeNotes, harMaj: "+this.modes[4].notes);
            // console.log("setModeNotes, dblHarMaj: "+this.modes[5].notes);

            // set the sortedSoundNames data property to allow note pitches to always ascend (for played notes)
            var rootIndexInFileNoteList = this.fileNoteList.indexOf(this.rootNote);
            var newSoundNames = [...this.soundNames];
            // sort the fileNoteList beginning at this index
            for (var i=0; i<rootIndexInFileNoteList; i++) {
                newSoundNames.push(newSoundNames.shift());
            };

            var addedOn = [];
            var rootNotA = false;
            if (rootIndexInFileNoteList !== 0) {
                rootNotA = true;
                addedOn = newSoundNames.slice(-rootIndexInFileNoteList);
                // modify the shifted prefixed 0 names to instead be prefixed with 3
                for (var i=0;i<addedOn.length;i++) {
                    addedOn[i] = addedOn[i].replace('0','3');
                }
            };
            if (rootNotA) {
                newSoundNames = newSoundNames.slice(0,-rootIndexInFileNoteList).concat(addedOn);
            };

            this.sortedSoundNames = newSoundNames;

            // console.log("sortedSoundNames, "+JSON.stringify(this.sortedSoundNames));

            // for each mode, filter the sortedSoundNames and create new arrays for single notes, triads and extensions using the intervals for each mode
            for (mode in this.modes) {
                for (var i=0;i<21; i++) {
                    this.modes[mode].noteFiles[i] = this.sortedSoundNames[this.modes[mode].fileInts[i]];
                }
                // console.log("mode "+this.modes[mode].modeName+", \n"+JSON.stringify(this.modes[mode].noteFiles));    
            }

            // define triad note indices (the index in notes array)
            // [[1,3,5],[2,4,6],[3,5,7],[4,6,1],[5,7,2],[6,1,3],[7,2,4]]
            var triadDegs = [[0,2,4],[1,3,5],[2,4,6],[3,5,0],[4,6,1],[5,0,2],[6,1,3]];
            // define triad note indices (the index in fileNoteList)
            var triadFileDegs = [[0,2,4],[1,3,5],[2,4,6],[3,5,7],[4,6,8],[5,7,9],[6,8,10]];

            // define extended note indices (the index in notes array)
            // [[1,3,5,7],[2,4,6,1],[3,5,7,2],[4,6,1,3],[5,7,2,4],[6,1,3,5],[7,2,4,6]]
            var extDegs = [[0,2,4,6],[1,3,5,0],[2,4,6,1],[3,5,0,2],[4,6,1,3],[5,0,2,4],[6,1,3,5]];
            // define extended note indices (the index in fileNoteList)
            var extFileDegs = [[0,2,4,6],[1,3,5,7],[2,4,6,8],[3,5,7,9],[4,6,8,10],[5,7,9,11],[6,8,10,12]];
            
            // set tNoteFiles, eNoteFiles
            for (mode in this.modes) {
                for (var i=0;i<triadFileDegs.length;i++) {
                    for (var j=0;j<triadFileDegs[i].length;j++) {
                        // set each tNoteFiles element to the index of noteFiles from triadFileDegs
                        this.modes[mode].tNoteFiles[i][j] = this.modes[mode].noteFiles[triadFileDegs[i][j]];
                    }
                }
                // console.log("TRIAD NOTES ("+this.modes[mode].modeName+")\n"+JSON.stringify(this.modes[mode].tNoteFiles));
                for (var i=0;i<extFileDegs.length;i++) {
                    for (var j=0;j<extFileDegs[i].length;j++) {
                        // set each eNoteFiles element to the index of noteFiles from extFileDegs
                        this.modes[mode].eNoteFiles[i][j] = this.modes[mode].noteFiles[extFileDegs[i][j]];
                    }
                }
                // console.log("EXT NOTES ("+this.modes[mode].modeName+")\n"+JSON.stringify(this.modes[mode].eNoteFiles));
            }
            // log mode objects
            // this.logModesInfo();
        },
        play(f) {
            var notesArr = [];
            // set the source/s
            if (Array.isArray(f)) {
                if (f.length === 3) {
                    // triad
                    var src1 = '/modeSounds/sounds/'+f[0]+'.mp3';
                    var src2 = '/modeSounds/sounds/'+f[1]+'.mp3';
                    var src3 = '/modeSounds/sounds/'+f[2]+'.mp3';
                    notesArr = [src1,src2,src3];

                } else if (f.length === 4) {
                    // extended
                    var src1 = '/modeSounds/sounds/'+f[0]+'.mp3';
                    var src2 = '/modeSounds/sounds/'+f[1]+'.mp3';
                    var src3 = '/modeSounds/sounds/'+f[2]+'.mp3';
                    var src4 = '/modeSounds/sounds/'+f[3]+'.mp3';
                    notesArr = [src1,src2,src3,src4];

                }
            } else {
                // single note
                var src = '/modeSounds/sounds/'+f+'.mp3';
                notesArr = [src];
            }

            // define BufferLoader
            function BufferLoader(context, urlList, callback) {
                this.context = context;
                this.urlList = urlList;
                this.onload = callback;
                this.bufferList = new Array();
                this.loadCount = 0;
            }
            
            BufferLoader.prototype.loadBuffer = function(url, index) {
                // Load buffer asynchronously
                var request = new XMLHttpRequest();
                request.open("GET", url, true);
                request.responseType = "arraybuffer";
            
                var loader = this;
            
                request.onload = function() {
                // Asynchronously decode the audio file data in request.response
                loader.context.decodeAudioData(
                    request.response,
                    function(buffer) {
                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    loader.bufferList[index] = buffer;
                    if (++loader.loadCount == loader.urlList.length)
                        loader.onload(loader.bufferList);
                    },
                    function(error) {
                    console.error('decodeAudioData error', error);
                    }
                );
                }
            
                request.onerror = function() {
                alert('BufferLoader: XHR error');
                }
            
                request.send();
            }
            
            BufferLoader.prototype.load = function() {
                for (var i = 0; i < this.urlList.length; ++i)
                this.loadBuffer(this.urlList[i], i);
            }

            // create audio context and initialise buffers
            var ctx;
            var bufferLoader;

            function init() {
                ctx = new AudioContext();
                bufferLoader = new BufferLoader(
                    ctx,
                    notesArr,
                    finishedLoading
                );
                bufferLoader.load();
            }
            init();

            function finishedLoading(bufferList) {
                // create the number of sources required and play them at the same time
                if (bufferList.length !== 0) {
                    if (bufferList.length === 1) {
                        // single note, create 1 source, set buffer, connect to context destination and play
                        var s = ctx.createBufferSource();
                        s.buffer = bufferList[0];
                        s.connect(ctx.destination);
                        s.start(0);
                    } else if (bufferList.length === 3) {
                        // triad, create 3 sources, set buffers, connect to context destination and play at same time
                        var s1 = ctx.createBufferSource();
                        var s2 = ctx.createBufferSource();
                        var s3 = ctx.createBufferSource();
                        s1.buffer = bufferList[0];
                        s2.buffer = bufferList[1];
                        s3.buffer = bufferList[2];
                        s1.connect(ctx.destination);
                        s2.connect(ctx.destination);
                        s3.connect(ctx.destination);
                        s1.start(0);
                        s2.start(0);
                        s3.start(0);
                    } else if (bufferList.length === 4) {
                        // extended, create 4 sources, set buffers, connect to context destination and play at same time
                        var s1 = ctx.createBufferSource();
                        var s2 = ctx.createBufferSource();
                        var s3 = ctx.createBufferSource();
                        var s4 = ctx.createBufferSource();
                        s1.buffer = bufferList[0];
                        s2.buffer = bufferList[1];
                        s3.buffer = bufferList[2];
                        s4.buffer = bufferList[3];
                        s1.connect(ctx.destination);
                        s2.connect(ctx.destination);
                        s3.connect(ctx.destination);
                        s4.connect(ctx.destination);
                        s1.start(0);
                        s2.start(0);
                        s3.start(0);
                        s4.start(0);
                    }
                }
            }
        },
        // logModesInfo() {
        //     console.log("logModesInfo, \n");
        //     for (var i=0; i<this.modes.length; i++) {
        //         console.log(JSON.stringify(this.modes[i]));
        //     }  
        // }
    },
    mounted() {
        this.getRootNote();
    },
    computed: {
        // computed properties
    },
    // can specify component template here if inclined
    // template: '<html>'
});

app.mount('#modeUtility');
