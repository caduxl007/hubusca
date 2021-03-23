import React, { useMemo } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface IRepository {
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  pushed_at: Date;
  created_at: Date;
}

const Repository: React.FC<IRepository> = ({
  full_name,
  description,
  html_url,
  pushed_at,
  created_at,
  language,
}: IRepository) => {
  const dateCriatedAt = useMemo(() => {
    return new Date(created_at).toLocaleDateString();
  }, [created_at]);

  const datePushedAt = useMemo(() => {
    return new Date(pushed_at).toLocaleDateString();
  }, [pushed_at]);

  return (
    <Container>
      <a key={full_name} href={html_url}>
        <div>
          <strong>{full_name}</strong>
          <p>{description}</p>

          {language && (
            <div>
              <p>
                <span>Linguagem: </span> {language}
              </p>
            </div>
          )}
          <div>
            <p>
              <span>Data de criação: </span> {dateCriatedAt}
            </p>
            <p>
              <span>Último push: </span>
              {datePushedAt}
            </p>
          </div>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Container>
  );
};

export default Repository;
