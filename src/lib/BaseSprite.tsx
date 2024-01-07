import React from "react";
import type {ISprite, IStage} from './interface';
export interface IBaseSpriteProps<IProps> {
    sprite: ISprite<IProps>;
    stage: IStage;
}
export class BaseSprite<IProps = any, IState= any> extends React.Component<IBaseSpriteProps<IProps>, IState> {

}