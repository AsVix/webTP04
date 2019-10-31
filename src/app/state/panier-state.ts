import {NgxsModule,Action,Selector,State, StateContext} from '@ngxs/store';
import {PanierStateModel} from './panier-state-model';
import {AddToPanier} from '../panier/action/add-to-panier';


@State<PanierStateModel>({
    name: 'panier',
    defaults: {
        panier: []
    }
})

export class PanierState {

  @Selector()
    static getPanier(state: PanierStateModel) {
        return state.panier;
    }

@Action(AddToPanier)
    add({getState, patchState }: StateContext<PanierStateModel>, { payload }: AddToPanier) {
        const state = getState();
        patchState({
            panier: [...state.panier, payload]
        });
    }
}