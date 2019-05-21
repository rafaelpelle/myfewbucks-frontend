export interface IRootReducer {
	UserReducer: IUserReducer,
}

export interface IUserReducer {
	accessToken: string,
}

/////////////////////////////////////////////////////////////////
/////////////////////////// FUNCTIONS ///////////////////////////
/////////////////////////////////////////////////////////////////
export type IHandleTopMenu = (topMenuIsOpen: boolean) => void
export type IHandleBottomMenu = (bottomMenuIsOpen: boolean) => void
