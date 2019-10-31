import { Article } from '../../models/article'

export class Remove {
    static readonly type = '[Article] Remove';

    constructor(public payload: Article) {}
    
}
