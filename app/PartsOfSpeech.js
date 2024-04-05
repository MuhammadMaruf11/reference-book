import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PartsOfSpeech = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Parts of speech</Text>
            <View>
                <Text style={styles.sectionTitle}>Chapter.1 Parts of Speech</Text>
                <Text style={styles.content}>
                    Every language is built from words, just like how a building is made from bricks. So, let's start by understanding what a word is.
                </Text>
                <Text style={styles.content}>
                    A word is a sound or a combination of sounds that represents an idea, object, or thought. It can be spoken or written. In English, a word can be as simple as one letter, like 'I', or a group of letters, like 'Jam', which is someone's name. Morphology, which is a part of linguistics, studies how words are formed, what they mean, and how they work in sentences. It also deals with things like spelling.
                </Text>
                <Text style={styles.content}>
                    Here are some examples of words: Boy, kite, fox, mobile phone, nature, etc.
                </Text>
                <Text style={styles.content}>
                    In English grammar, there are nine parts of speech: noun, pronoun, verb, adverb, adjective, preposition, conjunction, interjection, and determiners. Some people group determiners with adjectives, but in more advanced studies, they're considered separately. These parts of speech show how words function in sentences. Sometimes, a word can do more than one job depending on how it's used in a sentence.
                </Text>

                <View style={styles.list}>
                    <Text style={styles.sectionTitle}>Here are the nine parts of speech in English grammar:</Text>
                    {[
                        'Noun',
                        'Pronoun',
                        'Verb',
                        'Adverb',
                        'Adjective',
                        'Preposition',
                        'Conjunction',
                        'Interjection',
                        'Determiners'
                    ].map((item, index) => (
                        <Text key={index} style={styles.listItem}>{`${index + 1}. ${item}`}</Text>
                    ))}
                </View>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Chapter.2 Noun</Text>
                <Text style={styles.content}>
                    A noun is a word that represents a place, person, or thing. It's the word we use to talk about anything with a name. Essentially, anything that's named is a noun. Usually, nouns are names for things we can physically touch, like a lamb, pen, or table. But sometimes, nouns represent things we can't touch, like happiness, determinism, or truth.
                </Text>
                <Text style={styles.content}>
                    Some examples of noun:
                </Text>

                <View style={styles.list}>
                    {[
                        'People: Ali, boy, singer.',
                        'Animals: Cat, cow, elephant.',
                        'Places: Karachi, city, street.',
                        'Objects: Cup, pencil, book.',
                        'Qualities: Boldness, sorrow.',
                        'Actions: Writing, listening, running.'
                    ].map((item, index) => (
                        <Text key={index} style={styles.listItem}>{`▪ ${item}`}</Text>
                    ))}
                </View>
                <Text style={styles.sectionTitle}>Types of Nouns</Text>
                <Text style={styles.content}>
                    Various types of nouns exist, and a single noun can belong to multiple categories simultaneously. For instance, a common noun like "pencil" can be both countable and concrete, and it's also singular. Here are some primary types of nouns outlined below.
                </Text>

                <View style={styles.list}>
                    {[
                        'Proper Noun',
                        'Common Noun',
                        'Concrete Noun',
                        'Abstract Noun',
                        'Collective Noun',
                        'Compound Noun',
                        'Countable Noun',
                        'Uncountable Noun',
                        'Gerund Noun',
                        'Gender-specific Nouns',
                        'Verbal Noun'
                    ].map((item, index) => (
                        <Text key={index} style={styles.listItem}>{`${index + 1}. ${item}`}</Text>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>1. Proper Noun</Text>
                <Text style={styles.content}>
                    A proper noun is the given name of a person, or a specific place or thing, i.e. its own name (e.g., Imran, Karachi, and Rover). A proper noun always starts with a capital letter. All days and months are proper noun and start with capital letters (e.g. Sunday, March, and December). Name of all Person, name of countries, name of oceans are counted in category of proper nouns (e.g., Mashal, Pakistan, Atlantic).
                </Text>

                <Text style={styles.content}>
                    Common nouns are not capitalized unless used at the beginning of a sentence. There are exceptions, like in poetry where every word of a new line is capitalized. Something that is personified in poetry is also capitalized, e.g., "So Nature incites them in their hearts" (Prologue- Geoffrey Chaucer).
                </Text>

                <Text style={styles.sectionTitle}>2. Common Noun</Text>
                <Text style={styles.content}>
                    A common noun is the word used for a class of person, place, or thing (e.g., person, city, and dog). Common nouns are not capitalized unless used at the beginning of a sentence. There are exceptions, like in poetry where every word of a new line is capitalized. Something that is personified in poetry is also capitalized, e.g., "So Nature incites them in their hearts" (Prologue- Geoffrey Chaucer).
                </Text>

                <Text style={styles.sectionTitle}>3. Concrete Noun</Text>
                <Text style={styles.content}>
                    Concrete nouns are the things which we can see or touch physically. This noun contrasts with the abstract category of noun. For example: tree, hammer, and pen. We can see them, feel them, or touch them. Sometimes we name it a material noun.
                </Text>

                <Text style={styles.sectionTitle}>4. Abstract Noun</Text>
                <Text style={styles.content}>
                    Abstract nouns are things you cannot see or touch. Abstract nouns do not have physical existence. These nouns are difficult to guess. Sometimes, learners get confused with abstract nouns and adjectives. Abilities and emotions are abstract nouns, e.g., bravery, joy, determination, etc.
                </Text>

                <Text style={styles.sectionTitle}>5. Collective Noun</Text>
                <Text style={styles.content}>
                    Collective nouns are words that denote a collection or multitude of something. These nouns are used as singular, e.g., team, army, concert.
                </Text>

                <Text style={styles.sectionTitle}>6. Compound Noun</Text>
                <Text style={styles.content}>
                    Compound nouns are nouns made up of more than one word. For example: court-martial, pickpocket, water bottle. Some compound nouns are two words (e.g., peace pipe), some are hyphenated (e.g., playoff), and some have become single words (e.g., eye-opener). And, many of them are currently transitioning through those stages. Therefore, spelling compound nouns can be a nightmare. Some compound nouns form their plural by adding an s to the principal word, not necessarily to the end (e.g., brothers-in-law).
                </Text>

                <Text style={styles.sectionTitle}>7. Countable Noun</Text>
                <Text style={styles.content}>
                    A countable noun is a noun that can be counted in numbers like one pen, two cars with both a singular and a plural form. (E.g. dog/dogs, pie/pies).
                </Text>

                <Text style={styles.sectionTitle}>8. Uncountable Noun</Text>
                <Text style={styles.content}>
                    An uncountable noun is a noun without a plural form. For example: oxygen, patience. Such nouns do not include counting. All abstract nouns fall under the uncountable category of nouns.
                </Text>

                <Text style={styles.sectionTitle}>9. Gerund Noun</Text>
                <Text style={styles.content}>
                    Gerunds are nouns that end in -ing and that represent actions. Gerunds have verb-like properties but are used differently in a sentence unlike verbs. Gerund nouns are modified with adverbs. How to differentiate between gerund noun and verb? Look at two examples.
                   
                    (a) Ali is singing a song.
                    
                    (b) Ali is fond of singing.
             
                    In sentence (a) singing is a verb as it shows the action that Ali is performing. Verbs with -ing are used followed by helping verbs like is, am, was, were, etc. But in sentence (b) singing is not an action being performed by Ali and not followed by a helping verb.
                </Text>
                <Text style={styles.sectionTitle}>10. Gender-specific Nouns</Text>
                <Text style={styles.content}>
                    Gender-specific nouns are nouns that are definitely male or female. For example: king, vixen, and actress. A blonde is a woman. A blond is a man.
                </Text>

                <Text style={styles.sectionTitle}>11. Verbal Noun</Text>
                <Text style={styles.content}>
                    Verbal nouns are nouns derived from verbs and do not have verb-like properties (e.g., building, drawing, attack).
                </Text>

                <Text style={styles.sectionTitle}>How to Differentiate Gerund Noun and Verbal Noun?</Text>
                <Text style={styles.content}>
                    To understand the difference between gerund noun and verbal noun, look at the given example.
                    
                    ▪ The ceremonial raising of the flag has started.
                    
                    ▪ Raising the flag carefully is much difficult.
                    
                    Verbal nouns, like gerunds, stem from verbs. However, unlike gerunds, they lack verb-like characteristics. In the given example, the verbal noun "raising" doesn't exhibit verb-like properties. It isn't affected by determiners or adjectives (such as "the" and "ceremonial"), and it requires a preposition ("of") to connect it to the flag. In contrast, in the sentence "raising the flag carefully is much difficult," the word "raising" (which, despite sharing the same spelling, is now a gerund) does display verb-like traits. Specifically, it's modified by an adverb ("carefully").
                </Text>

                <Text style={styles.sectionTitle}>Benefits of Using Verbal Nouns</Text>
                <Text style={styles.content}>
                    Using verbal nouns can provide clarity and precision in writing. They allow for concise expression, emphasizing the action or concept over the agent or subject.
                </Text>
            </View>

        </ScrollView>
    );
};


const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    chapterTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 10,
    },
    list: {
        marginLeft: 20,
        marginBottom: 10,
    },
    listItem: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default PartsOfSpeech;
