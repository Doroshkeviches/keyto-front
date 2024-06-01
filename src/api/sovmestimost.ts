import data from '../../src/data/sovmestimost.json'
export function getSovmestimostData() {
    return new Promise<{ sections: any[] }>(resolve => {
        setTimeout(resolve, 0, data)
    })
}
