import React                from 'react';
import { RotateSpinLoader } from 'react-css-loaders';
import { primaryText }      from '../../style/theme';


export default function Loader()
{
    return <RotateSpinLoader color={ primaryText } size="5" />;
}
