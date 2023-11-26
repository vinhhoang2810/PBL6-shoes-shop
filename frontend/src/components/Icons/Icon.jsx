import React from 'react';
import PropTypes from 'prop-types';

import {
    ArrowIcon,
    BasketIcon,
    CogIcon,
    DashboardIcon,
    DowntrendIcon,
    EyeIcon,
    GridIcon,
    ListIcon,
    OptionsIcon,
    SearchIcon,
    StatsIcon,
    TasksIcon,
    UptrendIcon,
    UsdIcon,
    UserIcon,
} from './Icons';

const Icon = (props) => {
    const components = {
        arrow: ArrowIcon,
        basket: BasketIcon,
        cog: CogIcon,
        dashboard: DashboardIcon,
        uptrend: UptrendIcon,
        downtrend: DowntrendIcon,
        eye: EyeIcon,
        grid: GridIcon,
        list: ListIcon,
        options: OptionsIcon,
        search: SearchIcon,
        stats: StatsIcon,
        tasks: TasksIcon,
        usd: UsdIcon,
        user: UserIcon,
    };

    const IconComponent = components[props.icon];
    return <IconComponent {...props} />;
};

export default Icon;

Icon.propTypes = {
    props: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        color: PropTypes.string,
        width: PropTypes.number,
        classes: PropTypes.string,
    }),
};

Icon.defaultProps = {
    icon: 'arrow',
    color: '#c3cad9',
};
