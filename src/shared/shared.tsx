import React, {memo} from 'react';
import css from "./shared.module.css";

export type sharedProps = {};

export const shared: React.FC<sharedProps> = ({}) => {
    return (
        <div className={css.container}>
            <></>
        </div>
    );
};

export default shared