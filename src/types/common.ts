import Actions from "../constants/actions";

export interface Project {
  id: string;
  createdAt: string;
  name: string;
  deadline: string;
}

export type State = Project[];

export type Action = {
  type: Actions;
  payload?: any;
};
