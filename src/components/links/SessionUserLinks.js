import React                from 'react';
import LinkList             from './LinkList';
import withSessionUserLinks from './withSessionUserLinks';


class SessionUserLinks extends React.Component
{
    render()
    {
        const { loadingLinks, links } = this.props;

        return (

            <section>

                <h2>My links</h2>

                { links && <LinkList items={ links } /> }
                { loadingLinks && <p>Loading...</p> }

            </section>

        );
    }
}


export default withSessionUserLinks( SessionUserLinks );
