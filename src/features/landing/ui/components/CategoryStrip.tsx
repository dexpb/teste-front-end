import { useState } from 'react'
import type { FC, SVGProps } from 'react'

import { TecnologiaIcon } from '../../../icons/ui/icons'
import iconCorrida from '../../../../assets/corrida 1.svg'
import iconCuidados from '../../../../assets/cuidados-de-saude 1.svg'
import iconFerramentas from '../../../../assets/ferramentas 1.svg'
import iconModa from '../../../../assets/moda 1.svg'
import iconSupermercados from '../../../../assets/supermercados 1.svg'
import iconWhiskey from '../../../../assets/whiskey.svg'
import { CategoryCard } from './CategoryCard'

type CategoryItem =
  | { id: 'tec'; label: 'Tecnologia'; Icon: FC<SVGProps<SVGSVGElement>> }
  | { id: 'sup'; label: 'Supermercado'; src: string }
  | { id: 'beb'; label: 'Bebidas'; src: string }
  | { id: 'fer'; label: 'Ferramentas'; src: string }
  | { id: 'sau'; label: 'Saúde'; src: string }
  | { id: 'esp'; label: 'Esportes e Fitness'; src: string }
  | { id: 'mod'; label: 'Moda'; src: string }

const categories: CategoryItem[] = [
  { id: 'tec', label: 'Tecnologia', Icon: TecnologiaIcon },
  { id: 'sup', label: 'Supermercado', src: iconSupermercados },
  { id: 'beb', label: 'Bebidas', src: iconWhiskey },
  { id: 'fer', label: 'Ferramentas', src: iconFerramentas },
  { id: 'sau', label: 'Saúde', src: iconCuidados },
  { id: 'esp', label: 'Esportes e Fitness', src: iconCorrida },
  { id: 'mod', label: 'Moda', src: iconModa },
]

export function CategoryStrip() {
  const [activeId, setActiveId] = useState<CategoryItem['id']>('tec')

  return (
    <section id="categorias" className="eco-categories" aria-labelledby="eco-cat-heading">
      <h2 id="eco-cat-heading" className="visually-hidden">
        Categorias
      </h2>
      <ul className="eco-categories__list">
        {categories.map((cat) =>
          'Icon' in cat ? (
            <CategoryCard
              key={cat.id}
              href={`#categoria-${cat.id}`}
              label={cat.label}
              Icon={cat.Icon}
              isActive={cat.id === activeId}
              onSelect={() => setActiveId(cat.id)}
            />
          ) : (
            <CategoryCard
              key={cat.id}
              href={`#categoria-${cat.id}`}
              label={cat.label}
              iconSrc={cat.src}
              isActive={cat.id === activeId}
              onSelect={() => setActiveId(cat.id)}
            />
          ),
        )}
      </ul>
    </section>
  )
}
