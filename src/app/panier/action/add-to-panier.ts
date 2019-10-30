import { Article } from '../../models/article'

export class AddToPanier {
    static readonly type = '[Article] Add';

    constructor(public payload: Article) {}
    
}
