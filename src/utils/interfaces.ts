export interface IRootReducer {
	UserReducer: IUserReducer,
}

export interface IUserReducer {
	accessToken: string,
}

/////////////////////////////////////////////////////////////////
/////////////////////////// FUNCTIONS ///////////////////////////
/////////////////////////////////////////////////////////////////
export type ISetTopMenuIsOpen = (topMenuIsOpen: boolean) => void
export type ISetBottomMenuIsOpen = (bottomMenuIsOpen: boolean) => void
