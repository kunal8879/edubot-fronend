export class MessageModel {
    author: string;
    sentence: string;
    time: string;

    constructor(author: string, sentence: string, time: string) {
        this.author = author;
        this.sentence = sentence;
        this.time = time;
    }
}

// export class MessageModel {
//     sentence: string;
// }