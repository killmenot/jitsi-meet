/* @flow */

import Button, { ButtonGroup } from '@atlaskit/button';
import { AtlasKitThemeProvider } from '@atlaskit/theme';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { translate } from '../../base/i18n';

import {
    openWebApp,
    openDesktopApp
} from '../actions';

declare var interfaceConfig: Object;

/**
 * The type of the React {@code Component} props of
 * {@link DeeplinkingDesktopPage}.
 */
 type Props = {

    /**
     * Used to dispatch actions from the buttons.
     */
    dispatch: Dispatch<*>,

    /**
     * Used to obtain translations.
     */
    t: Function
};

/**
 * React component representing unsupported browser page.
 *
 * @class UnsupportedDesktopBrowser
 */
class DeeplinkingDesktopPage<P : Props> extends Component<P> {
    /**
     * Initializes a new {@code AbstractDialog} instance.
     *
     * @param {Object} props - The read-only React {@code Component} props with
     * which the new instance is to be initialized.
     */
    constructor(props: P) {
        super(props);

        // Bind event handlers so they are only bound once per instance.
        this._openDestopApp = this._openDestopApp.bind(this);
        this._onLaunchWeb = this._onLaunchWeb.bind(this);
        this._onTryAgain = this._onTryAgain.bind(this);
    }

    /**
     * Implements the Component's componentDidMount method.
     *
     * @inheritdoc
     */
    componentDidMount() {
        this._openDestopApp();
    }

    /**
     * Renders the component.
     *
     * @returns {ReactElement}
     */
    render() {
        const { t } = this.props;
        const { APP_NAME } = interfaceConfig;

        return (

            // Enabling light theme because of the color of the buttons.
            <AtlasKitThemeProvider mode = 'light'>
                <div className = 'deeplinking'>
                    <div className = 'header'>
                        <img
                            className = 'logo'
                            src = 'images/logo-deeplinking.svg' />
                        <p className = 'appName'>{ APP_NAME }</p>
                    </div>
                    <div className = 'content'>
                        <div className = 'leftColumn'>
                            <div className = 'leftColumnContent'>
                                <div className = 'image' />
                            </div>
                        </div>
                        <div className = 'rightColumn'>
                            <div className = 'rightColumnContent'>
                                <h1 className = 'title'>
                                    {
                                        t('deeplinking.title',
                                        { app: APP_NAME })
                                    }
                                </h1>
                                <p className = 'description'>
                                    {
                                        t('deeplinking.description',
                                            { app: APP_NAME })
                                    }
                                </p>
                                <div className = 'buttons'>
                                    <ButtonGroup>
                                        <Button
                                            appearance = 'default'
                                            onClick = { this._onTryAgain }>
                                            { t('deeplinking.tryAgainButton') }
                                        </Button>
                                        <Button onClick = { this._onLaunchWeb }>
                                            { t('deeplinking.launchWebButton') }
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AtlasKitThemeProvider>
        );
    }

    _openDestopApp: () => {}

    /**
     * Dispatches the <tt>openDesktopApp</tt> action.
     *
     * @returns {void}
     */
    _openDestopApp() {
        this.props.dispatch(openDesktopApp());
    }

    _onTryAgain: () => {}

    /**
     * Handles try again button clicks.
     *
     * @returns {void}
     */
    _onTryAgain() {
        this._openDestopApp();
    }

    _onLaunchWeb: () => {}

    /**
     * Handles launch web button clicks.
     *
     * @returns {void}
     */
    _onLaunchWeb() {
        this.props.dispatch(openWebApp());
    }
}

export default translate(connect()(DeeplinkingDesktopPage));