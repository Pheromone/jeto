"""Log request details, remove unused columns

Revision ID: 4db84b386c48
Revises: 5a5346d9845d
Create Date: 2015-09-29 20:10:50.801507

"""

# revision identifiers, used by Alembic.
revision = '4db84b386c48'
down_revision = '5a5346d9845d'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('audit_log', sa.Column('request_details', sa.Text(), nullable=True))
    op.drop_column('audit_log', 'content')
    op.drop_column('audit_log', 'query')
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('audit_log', sa.Column('query', mysql.TEXT(), nullable=True))
    op.add_column('audit_log', sa.Column('content', mysql.TEXT(), nullable=True))
    op.drop_column('audit_log', 'request_details')
    ### end Alembic commands ###
