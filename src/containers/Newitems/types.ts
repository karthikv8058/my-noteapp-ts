import { ActionType } from 'typesafe-actions';
import * as actions from './action';


/* --- ACTIONS --- */
type TestpageActions = ActionType<typeof actions>;


type ContainerActions = TestpageActions;

export default ContainerActions;