import React from 'react';
import PropTypes from 'prop-types';
import StyleSheet from '../../style/StyleSheet';
import css from '../../style/css';
import { FlatList, Text, View } from 'react-native';
import { getStyles } from '../../utils';
import ListGroupItem from './ListGroupItem';
import ListGroupItemAction from './ListGroupItemAction';

const propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.any,
};

const styles = StyleSheet.create({
    '.list-group': css`
    display: flex;
    flex-direction: column;
  
    // No need to set list-style: none; since .list-group-item is block level
    padding-left: 0; // reset padding because ul and ol
    margin-bottom: 0;
    //@include border-radius($list-group-border-radius);
    `,
});

const ListGroup = React.forwardRef((props, ref) => {
    const { children, style, ...elementProps } = props;
    const classes = getStyles(styles, ['.list-group']);

    return (
        <View style={[classes, style]} >
            {children}
        </ View>

    );
});

ListGroup.displayName = 'ListGroup';
ListGroup.propTypes = propTypes;

ListGroup.Item = ListGroupItem;
ListGroup.ItemAction = ListGroupItemAction;

export default ListGroup;

/* testing >> delet me later
    <View style={[classes, style]} >
        <FlatList
            data={[
                { key: 'Patrik 1' },
                { key: 'Patrik 2' },
                { key: 'Patrik 3' },
                { key: 'Patrik 4' },
                { key: 'Patrik 5' },
                { key: 'Patrik 6' },
            ]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        {children}
    </ View>
*/