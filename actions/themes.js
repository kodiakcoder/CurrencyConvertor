//TODO: Add Actions for themes
export const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';

export const changePrimaryColor = (color) => (
    {
        type: CHANGE_PRIMARY_COLOR,
        color,
    }
)