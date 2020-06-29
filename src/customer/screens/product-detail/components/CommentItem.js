import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Icon, Text, Button } from 'native-base';
import useTheme from '../../../../common/theme/use-theme';

function CommentItem({author, comment, childComment, date, onPressComment}) {
    const { colors } = useTheme()

    const getPublishDate = () => {
        let res = ""
        const diffMilliseconde = Math.abs(new Date() - date)
        const diffMinute = Math.floor(diffMilliseconde / (1000 * 60))
        const diffHeure = Math.floor(diffMinute / 60)
        const diffJour = Math.floor(diffHeure / 24)
        const diffWeek = Math.floor(diffJour / 7)
        const diffMois = Math.floor(diffWeek / 4)
        const diffAnnee = Math.floor(diffMois / 12)
        
        if(diffMinute < 1)
            res = "à l'instant"
        else if(diffHeure < 1)
            res = `il y a ${diffMinute} minute${diffMinute>1?"s":""}`
        else if(diffJour < 1)
            res = `il y a ${diffHeure} heure${diffHeure>1?"s":""}`
        else if(diffWeek < 1)
            res = `il y a ${diffJour} jour${diffJour>1?"s":""}`
        else if(diffMois < 1)
            res = `il y a ${diffWeek} semaine${diffWeek>1?"s":""}`
        else if(diffAnnee < 1)
            res = `il y a ${diffMois} mois`
        else
            res = `il y a ${diffAnnee} année${diffAnnee>1?"s":""}`
        
        return res   
    }

    return (
        <View style={{padding:10, ...childComment?{ borderLeftWidth:1, borderLeftColor:colors.textLight, marginVertical:5 }:{borderRadius:5, backgroundColor:colors.backgroundSecondary}}}>
            <Text style={{...styles.author, color:colors.text}}> 
                {author}
            </Text>
            <Text style={{...styles.comment, color:colors.textLight}}>
                {comment}
            </Text>
            <View style={styles.actionContainer}>
                <Text style={styles.date}>{ getPublishDate() }</Text>
                {
                    (!childComment)&&
                    <Button transparent small onPress={() => { if(onPressComment) onPressComment() }}>
                        <Icon type="MaterialCommunityIcons" name="comment-multiple" style={styles.iconComment}/>
                        <Text style={styles.numberComment}>1</Text>
                    </Button>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    author:{
        fontWeight:"bold",
        fontSize:12
    },
    comment:{
        fontSize:14
    },
    actionContainer:{
        display:"flex", 
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-between"
    },
    date:{
        fontSize:12,
        paddingVertical:5
    },
    actionButtonContainer:{
        display:"flex", 
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"flex-end"
    },
    btnResponse:{
        fontSize:14
    },
    iconComment:{
        fontSize:16, 
        marginLeft:5,
        marginRight:5
    },
    numberComment:{
        fontSize:14, 
        paddingLeft:0, 
        paddingRight:5
    }
})

export default CommentItem;