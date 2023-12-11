/**
 * @name scanner
 * @description scans files for viruses
 */

const NodeClam = require('clamscan');
const ClamScan = new NodeClam().init({
    debugMode: true,
    removeInfectedFiles: false,
    quarantineInfectedFiles: false, // path if true, but custom quarantine function
    clamscan: {
        scanArchives: true
    }
});

ClamScan.then(async clamscan => {

module.exports = {
    scamClan: async function (path) {
            return await clamscan.isInfected(path)
        }
    }
})