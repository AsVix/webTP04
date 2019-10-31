import {NgxsModule,Action,Selector,State, StateContext} from '@ngxs/store';
import {PanierStateModel} from './panier-state-model';
import {AddToPanier} from '../panier/action/add-to-panier';
import {Remove} from '../panier/action/remove';


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


@Action(Remove)
   del ({getState, patchState }: StateContext<PanierStateModel>, { payload }: any) {
       const state = getState();
       patchState({
           panier: [...state.panier]
       });
       state.panier.forEach(element => {
           if(payload.name == element.name)
           {
               if(state.panier.indexOf(element) == 0)
               {
                    patchState({
                        panier: [...(state.panier.slice(state.panier.indexOf(element),state.panier.indexOf(element)-1))]
                    });

               }
               else{
                    patchState({
                        panier: [...(state.panier.slice(state.panier.indexOf(element),state.panier.indexOf(element)+1))]
                    });
                }
            }
    });
    } 
}