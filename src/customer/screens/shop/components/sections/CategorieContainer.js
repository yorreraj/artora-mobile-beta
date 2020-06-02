import React from 'react';
import { List, ListItem, Text, Left, Right, Icon } from 'native-base';

function CategorieContainer(props) {
    const CATEGORIES = ['Tous les produits', 'Ordinateur et accessoires', 'Téléphone portable et accessoires', 'Casque & écoteur']

    return (
        <List style={{marginHorizontal:10}}>
            {
                CATEGORIES.map((categorie, id)=>
                    <ListItem key={id} style={{marginLeft:0}}>
                        <Left>
                            <Text>{categorie}</Text>
                        </Left>
                        <Right>
                            <Icon type="Entypo" name="chevron-right"/>
                        </Right>
                    </ListItem>
                )
            }
        </List>
    );
}

export default CategorieContainer;