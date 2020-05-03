import Actions from "../constants/actions";
import Statuses from "../constants/statuses";

export interface Project {
  id: string;
  createdAt: string;
  name: string;
  deadline: string;
  status: Statuses;
  timeLogged: number;
}

export type State = Project[];

export type Action = {
  type: Actions;
  payload?: any;
};
