import Text from 'components/atoms/Text'
import React from 'react'

interface PageSentenceProps {
  badge?: string
  title?: string
  description?: string
  badgeStyle?: 'success' | 'error'
  size?: 'default' | 'hero'
}

const PageSentence = ({
  title = '',
  description = '',
  badge = '',
  badgeStyle = 'success',
  size = 'default',
}: PageSentenceProps) => {
  const isHero = size === 'hero'
  const badgeClass = isHero
    ? 'text-badge font-semibold text-lg sm:text-xl tracking-widest'
    : undefined

  return (
    <article className={isHero ? 'space-y-8' : 'space-y-6'}>
      {title == '' && badge == '' ? (
        ''
      ) : (
        <div className={isHero ? 'space-y-4' : 'space-y-1'}>
          {badge == '' ? (
            ''
          ) : badgeClass ? (
            <p className={badgeClass}>{badge}</p>
          ) : (
            <Text
              value={badge}
              textStyle={
                badgeStyle == 'success' ? 'SectionBadge' : 'SectionBadgeError'
              }
            />
          )}
          {title == '' ? (
            ''
          ) : (
            <Text
              value={title}
              textStyle={isHero ? 'HeroPageTitle' : 'PageTitle'}
            />
          )}
        </div>
      )}
      {description == '' ? (
        ''
      ) : (
        <Text
          value={description}
          textStyle={isHero ? 'HeroPageDescription' : 'PageDescription'}
        />
      )}
    </article>
  )
}

export default PageSentence
